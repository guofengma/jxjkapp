/**
 * 转换时间戳
 * @param timeStamp
 * @param format: 年月日：Y M D, 时分秒：h m s
 * @returns {string}
 */
export const convertDate = (timeStamp, format) => {
  if (!timeStamp) return ''
  timeStamp = +timeStamp
  if (Number.isNaN(timeStamp)) {
    throw new Error('时间戳类型有误')
  }
  let date = new Date(timeStamp)
  // 年月日
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  month = month < 10 ? '0' + month : month
  let day = date.getDate()
  day = day < 10 ? '0' + day : day

  if (format) {
    format = format.replace('Y', year)
    format = format.replace('M', month)
    format = format.replace('D', day)
    // 时分秒
    let hour = date.getHours()
    hour = hour < 10 ? '0' + hour : hour
    let min = date.getMinutes()
    min = min < 10 ? '0' + min : min
    let sec = date.getSeconds()
    sec = sec < 10 ? '0' + sec : sec
    format = format.replace('h', hour)
    format = format.replace('m', min)
    format = format.replace('s', sec)
    return format
  } else {
    return `${year}-${month}-${day}`
  }
}

// 过滤对象中值为空的key
export const filterEmptyKey = (obj) => {
  let objCopy = Object.assign({}, obj)
  for (let key in objCopy) {
    if (objCopy[key] === '') {
      delete objCopy[key]
    }
  }
  return objCopy
}

/**
 * 判断是否为空对象
 * @param obj
 * @param hasFn：是否包含值为函数的key
 * @returns {boolean}
 */
export const isEmptyObj = (obj, hasFn) => {
  if (hasFn) {
    let count = 0
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        count++
      }
    }
    return count === 0
  } else {
    return JSON.stringify(obj) === '{}'
  }
}

/**
 * AJAX
 * @param opts = { url: String,type: String, params: Object, success: Function, error: Function }
 * @returns {Promise}
 */
import axios from 'axios'
import store from '@/store'
export const fetchApi = (opts) => {
  const {type, ...cfg} = opts
  let areaId
  if (store.state.accountInfo.author === 3) {
    areaId = store.state.pickedArea.id
  }
  let sendData
  switch (cfg.headers && cfg.headers['Content-Type']) {
    case 'application/json':
      sendData = JSON.stringify({
        areaId,
        ...cfg.data
      })
      break
    default:
      if (cfg.data instanceof FormData) {
        sendData = cfg.data
      } else {
        sendData = {
          areaId,
          ...cfg.data
        }
      }
  }
  return axios(Object.assign({}, cfg, {
    method: type || 'get',
    params: cfg.params && {
      areaId,
      ...cfg.params
    },
    data: sendData
  }))
  .then((response) => {
    let successCb = opts.success
    successCb && successCb(response.data)
    return response.data
  })
  .catch((error) => {
    let errorCb = opts.error
    errorCb && errorCb(error)
    throw error
  })
}
/**
 * cookie相关操作对象
 * @type {{}}
 */
export const Cookie = {
  get (key) {
    if (key && new RegExp('(^| )' + key + '=([^;]*)(;|$)').exec(document.cookie)) {
      return decodeURIComponent(RegExp.$2)
    } else {
      return
    }
  },
  remove (key, path, domain) {
    if (key) {
      if (!Array.isArray(key)) {
        key = [key]
      }
      key.forEach(item => {
        document.cookie = item + '= ; expires=' + new Date(0)
      })
    } else {
      let keys = document.cookie.match(/(?!\s)([^;=]+)(?==.*(;|$))/g)
      let forPath = path ? ';path=' + path : ''
      forPath += domain ? ';domain=' + domain : ''
      keys.forEach(function (item, index) {
        document.cookie = item + '= ; expires=' + new Date(0) + forPath
      })
    }
  }
}

/**
 *  获取服务器时间
 */
export const getServerDate = (cb) => {
  let xhr = new XMLHttpRequest()
  xhr.open('get', '/', true)
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 3) {
      let now = xhr.getResponseHeader('Date')
      cb(new Date(now).valueOf())
      xhr.abort()
    }
  }
  xhr.send(null)
}

/**
 * 深层assign
 */
export const deepAssign = function () {
  const args = arguments
  return Array.from(args).reduce(function (prev, curr) {
    function typeOf (data) {
      return Object.prototype.toString.call(data).slice(8, -1).toLowerCase()
    }
    let _prev = Object.assign({}, prev)
    let _curr = Object.assign({}, curr)
    ;(function recurse (_prev, _curr) {
      Object.keys(_curr).forEach(function (key) {
        let prevVal = _prev[key]
        let currVal = _curr[key]
        if (typeOf(prevVal) === 'object' && typeOf(currVal) === 'object') {
          recurse(prevVal, currVal)
        } else if (currVal !== undefined) {
          _prev[key] = currVal
        }
      })
    })(_prev, _curr)
    return _prev
  })
}

/**
 * 获取accountInfo
 */

export const getAccountInfo = (function () {
  let accountInfo
  return function (isUpate) {
    if (!(accountInfo && !isUpate)) {
      accountInfo = JSON.parse(decodeURIComponent(localStorage.getItem('accountInfo')))
    }
    return accountInfo
  }
}())

/**
 * 订单状态
 */
export const payStateFormat = (state) => {
  const DICT = {
    '0': '未支付',
    '1': '支付',
    '2': '申请中',
    '3': '申请通过',
    '99': '未申请通过'
  }
  return DICT[state]
}

/**
 * 用户等级
 */
export const userStateFormat = (isVip) => {
  if (isVip) {
    return 'VIP'
  }
  return '普通用户'
}

/**
 * 用户等级
 */
export const authorFormat = (author) => {
  switch (author) {
    case 0: { return '医生' }
    case 1: { return '医院主管' }
    case 2: { return '集团领导' }
    case 3: { return '超级用户' }
  }
  return '权限异常'
}

/**
 * 用户等级
 */
export const convertServiceState = (state) => {
  switch (state) {
    case 0: { return '指派中' }
    case 1: { return '服务中' }
    case 2: { return '已完成' }
    case 98: { return '申请作废' }
    case 99: { return '已作废' }
  }
  return state
}
