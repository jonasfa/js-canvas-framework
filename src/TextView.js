function TextView() {
}

TextView.prototype = new View();
TextView.prototype.text = null;

TextView.prototype.draw = function(context) {
	context.fillStyle = "rgb(0, 0, 0)";
	context.font = '10px sans-serif';
	context.textBaseline = 'top';
	context.fillText(this.text, this.left, this.top, this.right - this.left);
}