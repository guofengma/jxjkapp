import { fetchApi } from '@/utils/index'

// 查询当前订单信息
export const GET_ORDER_INFO = '/order/admin/'
export const getOrderInfoApi = (params) => {
  return fetchApi({
    url: GET_ORDER_INFO,
    type: 'get',
    params
  })
}

export const GET_ORDER_PAY = '/orderProduct/refundment'
export const payOrderApi = (data) => {
  return fetchApi({
    url: GET_ORDER_PAY,
    type: 'post',
    data
  })
}

// 订单退款
export const GET_ORDER_REFUNDMENT = '/orderProduct/refundment'
export const orderRefundmentApi = (data) => {
  return fetchApi({
    url: GET_ORDER_REFUNDMENT,
    type: 'post',
    data
  })
}
