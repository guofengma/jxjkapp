import { fetchApi } from '@/utils/index'

// 查询当前订单信息
export const GET_ORDER_INFO = '/order/detail'
export const getOrderInfoApi = (params) => {
  return fetchApi({
    url: GET_ORDER_INFO,
    type: 'get',
    params
  })
}

export const GET_ORDER_PAY = '/order/pay'
export const payOrderApi = (data) => {
  return fetchApi({
    url: GET_ORDER_PAY,
    type: 'post',
    data
  })
}

// 订单退款
export const GET_ORDER_REFUNDMENT = '/Rollback/apply'
export const orderRefundmentApi = (id, amount) => {
  return fetchApi({
    url: GET_ORDER_REFUNDMENT,
    type: 'post',
    data: {
      comment: '退款',
      targetId: id,
      type: 2,
      amount
    }
  })
}

// 查询用户余额
export const QUERY_BALANCE_URL = '/user/queryBalance'
export const queryBalanceApi = (userId) => {
  return fetchApi({
    url: QUERY_BALANCE_URL,
    type: 'get',
    params: {
      userId
    }
  })
}
