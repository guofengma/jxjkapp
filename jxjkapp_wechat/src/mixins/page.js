import wepy from 'wepy'

export default class PageMixin extends wepy.mixin {
  initData (reqParams) {
    if (reqParams) {
      this.reqParams = reqParams
    } else {
      reqParams = this.reqParams
    }
    return this.$_request(reqParams).then(content => {
      if (!content) {
        this.$invoke('CustomPage', 'initPage', {
          noData: true
        })
      } else {
        this.$invoke('CustomPage', 'initPage', {
          dataInited: true
        })
      }
      return content
    }).catch(() => {
      this.$invoke('CustomPage', 'initPage', {
        noServer: true
      })
    }).finally(() => {
      this.$apply()
    })
  }
}
