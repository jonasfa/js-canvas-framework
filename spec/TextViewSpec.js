describe("TextView",
function() {
	var textView;

	beforeEach(function() {
		textView = new TextView();
	});
	
	it("should have a text attribute",
	function() {
		expect(typeof(textView.text)).toNotBe("undefined");
	});	
});