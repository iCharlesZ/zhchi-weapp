//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    listData: [
      {
        "id": 1,
        "title": "恭喜天禄",
        "content": "宿命对决，历史巅峰——TYLOO强势完胜牛仔，挺近四强",
        "imgUrl": "../../image/tyloo.jpg"
      },
      {
        "id": 2,
        "title": "恭喜天禄",
        "content": "宿命对决，历史巅峰——TYLOO强势完胜牛仔，挺近四强",
        "imgUrl": "../../image/tyloo.jpg"
      },
      {
        "id": 3,
        "title": "恭喜天禄",
        "content": "宿命对决，历史巅峰——TYLOO强势完胜牛仔，挺近四强",
        "imgUrl": "../../image/tyloo.jpg"
      },
      {
        "id": 4,
        "title": "恭喜天禄",
        "content": "宿命对决，历史巅峰——TYLOO强势完胜牛仔，挺近四强",
        "imgUrl": "../../image/tyloo.jpg"
      },
      {
        "id": 5,
        "title": "恭喜天禄",
        "content": "宿命对决，历史巅峰——TYLOO强势完胜牛仔，挺近四强",
        "imgUrl": "../../image/tyloo.jpg"
      },
      {
        "id": 6,
        "title": "恭喜天禄",
        "content": "宿命对决，历史巅峰——TYLOO强势完胜牛仔，挺近四强",
        "imgUrl": "../../image/tyloo.jpg"
      },
      {
        "id": 7,
        "title": "恭喜天禄",
        "content": "宿命对决，历史巅峰——TYLOO强势完胜牛仔，挺近四强",
        "imgUrl": "../../image/tyloo.jpg"
      },
      {
        "id": 8,
        "title": "恭喜天禄",
        "content": "宿命对决，历史巅峰——TYLOO强势完胜牛仔，挺近四强",
        "imgUrl": "../../image/tyloo.jpg"
      },
      {
        "id": 9,
        "title": "恭喜天禄",
        "content": "宿命对决，历史巅峰——TYLOO强势完胜牛仔，挺近四强",
        "imgUrl": "../../image/tyloo.jpg"
      }
    ]
  },
  onShareAppMessage: function () {
    return this.data.shareData
  },
  itemOnClick: function () {
    console.log('点击文章');
    wx.navigateTo({
      url: '/pages/articleDtl/artlcleDtl' 
    })
  }
})
