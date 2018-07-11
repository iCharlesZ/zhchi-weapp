let timeId = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
	  history: [],
	  hot: ['新鲜的水果', '好吃的水果', '水果干'],
	  showKeywords: false,
	  keywords: ['水果1', '水果2', '水果3', '水果4', '水果5'],
	  value: '',
	  showResult: false,
	  result: [
		  {
			  id: 1,
			  url: '../detail/detail',
			  thumb: '/image/new.jpg',
			  title: '水果',
			  price: 0.01
		  },
		  {
			  id: 2,
			  url: '../detail/detail',
			  thumb: '/image/new.jpg',
			  title: '水果',
			  price: 0.02
		  }
	  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  const history = wx.getStorageSync('history');
	  if (history) {
		  this.setData({
			  history: JSON.parse(history)
		  })
		  console.log(this.data.history);
	  }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  cancelSearch() {
	  this.setData({
		  showResult: false,
		  showKeywords: false,
		  value: ''
	  })
  },
  searchInput(e) {
	//   console.log(e)
	  if (!e.detail.value) {
		  this.setData({
			  showKeywords: false
		  })
	  } else {
		//   console.log(this)
		  if (!this.data.showKeywords) {
			  timeId && clearTimeout(timeId);
			  timeId = setTimeout(() => {
				  this.setData({
					  showKeywords: true
				  })
			  }, 300)
		  }
	  }
  },
  keywordHandle(e) {
	  const text = e.target.dataset.text;
	  this.setData({
		  value: text,
		  showKeywords: false,
		  showResult: true
	  })
	  this.historyHandle(text);
  },
  historyHandle(value) {
	  let history = this.data.history;
	  const idx = history.indexOf(value);
	  if (idx === -1) {
		  // 搜索记录只保留8个
		  if (history.length > 7) {
			  history.pop();
		  }
	  } else {
		  history.splice(idx, 1);
	  }
	  history.unshift(value);
	  wx.setStorageSync('history', JSON.stringify(history));
	  this.setData({
		  history
	  });
  },
  clearhistory: function() {
	  this.setData({
		  history: [],
		  
	  })
	  wx.setStorageSync('history', '')
  }
})