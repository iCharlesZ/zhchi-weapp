//index.js
//获取应用实例
const app = getApp()

Page({
	data: {
		signin: 0,
		imgUrls: [
			{ url: '/image/swipe1.jpg' },
			{ url: '/image/swipe2.jpg' },
			{ url: '/image/swipe3.jpg' },
			{ url: '/image/swipe4.jpg' }
		],
		indicatorDots: true,
		autoplay: true,
		interval: 3000,
		duration: 800,
		circular: true,
		hotIcon: [
			{ img: "/image/qiandao.png", text: "签到", bindtap: "signIn" },
			{ img: "/image/quan.png", text: "礼券", bindtap: "voucher" },
			{ img: "/image/kanjia.png", text: "砍价", bindtap: "bargain"},
			{ img: "/image/zhuanlan.png", text: "专栏", bindtap: "column" }
		],
		newestTitle: "最近新品",
		newestList: [
			{ url:"/pages/detail/detail", img: "/image/new.jpg", 
				newestText: "新品1", newestText2: "性价比最高" },
			{ url: "/pages/detail/detail", img: "/image/new.jpg", 
				newestText: "新品2", newestText2: "性价比最高" },
			{ url: "/pages/detail/detail", img: "/image/new.jpg", 
				newestText: "新品3", newestText2: "性价比最高" },
			{ url: "/pages/detail/detail", img: "/image/new.jpg", 
				newestText: "新品4", newestText2: "性价比最高" }
		]
	},
	signIn: function() {
		if (this.data.signin == 0) {
			wx.showToast({
				title: '签到成功',
				icon: 'success',
				duration: 2000
			})
			this.setData({
				signin: 1
			})
		} else {
			wx.showToast({
				title: '你已经签到过',
				icon: 'success',
				duration: 2000
			})
		}
	},
	voucher: function() {
		wx.navigateTo({
			url: "/pages/voucher/voucher"
		})
	},
	bargain: function() {
		wx.navigateTo({
			url: "/pages/bargain/bargain"
		})
	},
	column: function() {
		wx.navigateTo({
			url: "/pages/column/column"
		})
	}

})
