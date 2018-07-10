// pages/category/category.js
Page({
	data: {
		category: [
			{ name: '选项1', id: 'option1' },
			{ name: '选项2', id: 'option2' },
			{ name: '选项3', id: 'option3' }
		],
		detail: [
			{
				"id": "option1",
				"banner": "/image/list1.png",
				"cate": "选项1",
				"detail": [
					{"thumb": "/image/s1.png","name": "水果"},
					{"thumb": "/image/s1.png","name": "水果"},
					{"thumb": "/image/s1.png","name": "水果"},
					{"thumb": "/image/s1.png","name": "水果"},
					{"thumb": "/image/s1.png","name": "水果"},
					{"thumb": "/image/s1.png","name": "水果"}
				]
			},
			{
				"id": "option2",
				"banner": "/image/list1.png",
				"cate": "选项2",
				"detail": [
					{"thumb": "/image/s1.png","name": "水果"},
					{"thumb": "/image/s1.png","name": "水果"},
					{"thumb": "/image/s1.png","name": "水果"},
					{"thumb": "/image/s1.png","name": "水果"},
					{"thumb": "/image/s1.png","name": "水果"},
					{"thumb": "/image/s1.png","name": "水果"}
				]
			},
			{
				"id": "option3",
				"banner": "/image/list1.png",
				"cate": "选项3",
				"detail": [
					{"thumb": "/image/s1.png","name": "水果"},
					{"thumb": "/image/s1.png","name": "水果"},
					{"thumb": "/image/s1.png","name": "水果"},
					{"thumb": "/image/s1.png","name": "水果"},
					{"thumb": "/image/s1.png","name": "水果"},
					{"thumb": "/image/s1.png","name": "水果"}
				]
			}
		],
		curIndex: 0,
		isScroll: false,
		toView: 'guowei'
	},
	
	onReady() {
		var self = this;
	},

	switchTab(e) {
		const self = this;
		this.setData({
			isScroll: true
		})
		setTimeout(function () {
			self.setData({
				toView: e.target.dataset.id,
				curIndex: e.target.dataset.index
			})
		}, 0)
		setTimeout(function () {
			self.setData({
				isScroll: false
			})
		}, 1)

	}
})