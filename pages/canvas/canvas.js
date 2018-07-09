Page({
  onReady: function () {
	  this.draw
	// this.interval = setInterval(this.draw, 17);
	this.position = {
		rad: 0,
		add: Math.PI / 45
	}
  },
  draw: function () {
    var context = wx.createContext();
	var p = this.position;
	p.rad += p.add;

	// if (p.rad <= 2 * Math.PI) {
	// 	nose(context, 50, 100, 20, 30, 0.4, p.rad);
	// } else {
	// 	nose(context, 50, 100, 20, 30, 0.4, Math.PI * 2);
	// 	// clearInterval(this.interval);
	// 	context.setFillStyle('#F69FD2');
	// 	context.fill();
	// 	context.closePath();
	// 	nostril();
	// }
	// function nose(context, x, y, a, b, O, rad) {
	// 	var step = (a > b) ? 1 / a : 1 / b;
	// 	context.beginPath();
	// 	context.setStrokeStyle('#DE7EAE');
	// 	for (var i = 0; i < rad; i += step) {
	// 		context.lineTo(
	// 			//绘制椭圆，O为倾斜角度
	// 			x + a * Math.cos(i) * Math.cos(O) - b * Math.sin(i) * Math.sin(O),
	// 			y + a * Math.cos(i) * Math.sin(O) + b * Math.sin(i) * Math.cos(O)
	// 		);
	// 	}
	// 	context.stroke();
	// }
	// function nostril () {
	// 	context.beginPath();
	// 	context.arc(40, 100, 5, 0, 2 * Math.PI);
	// 	context.setFillStyle('#DE7EAE');
	// 	context.fill();
	// 	context.closePath();

	// 	context.beginPath();
	// 	context.arc(57, 102, 5, 0, 2 * Math.PI);
	// 	context.fill();
	// 	context.closePath();
	// }




    wx.drawCanvas({
      canvasId: 'canvas',
      actions: context.getActions()
    })
  }
})
