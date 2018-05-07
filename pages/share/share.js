Page({
  data: {
    shareData: {
      title: '分享标题',
      desc: '分享描述',
      path: '/pages/index/index'
    }
  },
  onShareAppMessage: function () {
    return this.data.shareData
  }
})
