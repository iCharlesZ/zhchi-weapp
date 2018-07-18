Page({
  data: {
	  goodsList: {
		  list: []
	  }
  },
 
  onShow: function () {
	  var shopList = [0];
	  var shopCarInfoMem = wx.getStorageSync('shopCarInfo');
	  if (shopCarInfoMem) {
		  shopList = shopCarInfoMem.shopNum
	  }
	  this.data.goodsList.list = shopList;
	  this.setGoodsList(shopList);
  },
  setGoodsList: function (list) {
	  this.setData({
		  goodsList: {
			  list: list
		  }
	  });
  },
  selectTap: function() {
	  console.log('点击商品')
  },
  touchS: function (e) {
	  console.log(e)
  },
  touchM: function (e) {
	  console.log(e)
  },
  touchE: function (e) {
	  console.log(e)
  }
}) 