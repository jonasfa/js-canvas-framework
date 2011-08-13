function Activity() {
	var contentView;
	this.setContentView = function(newContentView) {
		contentView = newContentView;
	}
	this.getContentView = function() {
		return contentView;
	}
}
