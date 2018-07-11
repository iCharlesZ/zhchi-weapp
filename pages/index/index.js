//index.js
//获取应用实例
const app = getApp()

Page({
	data: {
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
			{ img: "/image/qiandao.png", text: "签到" },
			{ img: "/image/quan.png", text: "礼券" },
			{ img: "/image/kanjia.png", text: "砍价" },
			{ img: "/image/zhuanlan.png", text: "专栏" }
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
	}

})
