function View() {
}

View.prototype.left = 0;
View.prototype.top = 0;
View.prototype.right = 0;
View.prototype.bottom = 0;

View.prototype.layout = function(left, top, right, bottom) {
	this.left = left;
	this.top = top;
	this.right = right;
	this.bottom = bottom;
}

View.prototype.draw = function(context) {}