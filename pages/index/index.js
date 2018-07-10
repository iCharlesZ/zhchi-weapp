//index.js
//获取应用实例
const app = getApp()

Page({
	data: {
		imgUrls: [
			{ url: 'http://lsl.image.alimmdn.com/eye.jpg' },
			{ url: 'http://lsl.image.alimmdn.com/loginBG.jpg' },
			{ url: 'http://lsl.image.alimmdn.com/eye.jpg' },
			{ url: 'http://lsl.image.alimmdn.com/loginBG.jpg' }
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
			{ url:"/pages/detail/detail", img: "/image/s1.png", 
				newestText: "水果1", newestText2: "性价比最高" },
			{ url: "/pages/detail/detail", img: "/image/s1.png", 
				newestText: "水果2", newestText2: "性价比最高" },
			{ url: "/pages/detail/detail", img: "/image/s1.png", 
				newestText: "水果3", newestText2: "性价比最高" },
			{ url: "/pages/detail/detail", img: "/image/s1.png", 
				newestText: "水果4", newestText2: "性价比最高" }
		]
	}

})
