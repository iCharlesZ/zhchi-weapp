Page({
	data: {
		shopNum: 0,
		hideShopPopup: true,
		shopType: "addShopCar",
		buyNumMin: 1,
		buyNumber: 1,
		buyNumMax: 10,
		selectSizePrice: 0,
		shopCarInfo: {},
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
	onLoad: function () {
		var that = this;
		wx.getStorage({
			key: 'shopCarInfo',
			success: function (res) {
				that.setData({
					shopCarInfo: res.data,
					shopNum: res.data.shopNum
				});
			}
		})
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
		var shopCarInfo = this.bulidShopCarInfo();

		this.setData({
			shopCarInfo: shopCarInfo,
			shopNum: shopCarInfo.shopNum
		});

		wx.setStorage({
			key: 'shopCarInfo',
			data: shopCarInfo
		})
	},
	bulidShopCarInfo: function () {
		var shopCarMap = {};

		shopCarMap.pic = "/image/new.jpg";
		shopCarMap.name = "水果";
		shopCarMap.price = 100;
		shopCarMap.number = this.data.buyNumber;

		var shopCarInfo = this.data.shopCarInfo;
		if (!shopCarInfo.shopNum) {
			shopCarInfo.shopNum = 0;
		}
		shopCarInfo.shopNum = shopCarInfo.shopNum + this.data.buyNumber;

		return shopCarInfo;
	},
	buyNow: function() {
		this.closePopupTap();
	},
	numJianTap: function () {
		if (this.data.buyNumber > this.data.buyNumMin) {
			var currentNum = this.data.buyNumber;
			currentNum--;
			this.setData({
				buyNumber: currentNum
			})
		}
	},
	numJiaTap: function () {
		if (this.data.buyNumber < this.data.buyNumMax) {
			var currentNum = this.data.buyNumber;
			currentNum++;
			this.setData({
				buyNumber: currentNum
			})
		}
	},
	labelItemTap: function() {

	}
})