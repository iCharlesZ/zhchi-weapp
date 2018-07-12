
Page({
  data: {
	  thumb: '',
	  nickname: '',
	  orders: [],
	  hasAddress: false,
	  address: {}
  },

  onShow: function () {
	  let that = this;
	  let userInfo = wx.getStorageSync('userInfo')
	  if (!userInfo) {
		  wx.navigateTo({
			  url: "/pages/authorize/authorize"
		  })
	  } else {
		  that.setData({
			  thumb: userInfo.avatarUrl,
			  nickname: userInfo.nickName
		  })
	  }
  },

  aboutUs: function () {
	  wx.showModal({
		  title: '关于我们',
		  content: '关于我们关于我们关于我们关于我们',
		  showCancel: false
	  })
  }
})