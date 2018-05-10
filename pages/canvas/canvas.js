Page({
  onReady: function () {
	this.draw;
	this.interval = setInterval(this.draw, 17);
	this.position = {
		rad: 0,
		add: Math.PI / 45
	}
  },
  draw: function () {
    var context = wx.createContext();
	var p = this.position;
	p.rad += p.add;

	function nose(context, x, y, a, b, O, rad) {
		var step = (a > b) ? 1 / a : 1 / b;
		context.beginPath();
		context.setStrokeStyle('#DE7EAE');
		for (var i = 0; i < rad; i += step) {
			context.lineTo(
				x + a * Math.cos(i) * Math.cos(O) - b * Math.sin(i) * Math.sin(O),
				y + a * Math.cos(i) * Math.sin(O) + b * Math.sin(i) * Math.cos(O)
			);
		}
		context.stroke();
	}
	nose(context, 50, 100, 20, 30, 0.4, p.rad);
	if (p.rad > 2 * Math.PI) {
		clearInterval(this.interval);
		context.setFillStyle('#F69FD2');
		context.fill();
		context.closePath();
	}

    wx.drawCanvas({
      canvasId: 'canvas',
      actions: context.getActions()
    })
  }
})
