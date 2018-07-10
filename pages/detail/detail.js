Page({
	data: {
		shopNum: 0,
		hideShopPopup: true
	},
	bindGuiGeTap: function () {
		console.log('选择尺码')
		this.setData({
			hideShopPopup: false
		})
	},
	goShopCar: function () {
		wx.reLaunch({
			url: "/pages/cart/cart"
		});
	},
	toAddShopCar: function() {
		console.log('加入购物车')
	},
	tobuy: function() {
		console.log('立即购买')
	}
})