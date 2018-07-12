Page({
  data: {
  
  },
  bindGetUserInfo: function(e) {
	  if (!e.detail.userInfo) {
		  return;
	  }
	  wx.setStorageSync('userInfo', e.detail.userInfo)
	  wx.navigateBack();
  }
})