Page({
	data: {
		shopNum: 0,
		hideShopPopup: true,
		shopType: "addShopCar",
		buyNumMin: 1,
		buyNumber: 1,
		buyNumMax: 10,
		selectSizePrice: 0,
		goodsDetail: {
			"basicInfo": {
				"pic": "/image/new.jpg",
				"name": "水果"
			},
			"properties": [
				{
					"name": "重量",
					"option": [
						{
							"name": "1kg",
							"active": true
						},
						{
							"name": "2kg",
							"active": false
						},
						{
							"name": "3kg",
							"active": false
						}
					]
				},
				{
					"name": "选项2",
					"option": [
						{
							"name": "1kg",
							"active": true
						}
					]
				}
			]
		}
	},
	bindGuiGeTap: function () {
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
		this.setData({
			shopType: "addShopCar"
		})
		this.bindGuiGeTap();
	},
	tobuy: function() {
		this.setData({
			shopType: "tobuy"
		});
		this.bindGuiGeTap();
	},
	closePopupTap: function () {
		this.setData({
			hideShopPopup: true
		})
	},
	addShopCar: function() {
		this.closePopupTap();
		wx.showToast({
			title: '加入购物车成功',
			icon: 'success',
			duration: 2000
		})
	},
	buyNow: function() {
		this.closePopupTap();
	}
})