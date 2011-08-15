function TextView() {
}

TextView.prototype = new View();
TextView.prototype.text = null;

TextView.prototype.draw = function(canvas) {
	canvas.fillText(this.text, this.left, this.top, this.right - this.left);
}