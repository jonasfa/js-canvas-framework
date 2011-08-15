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
	
	describe("#draw",
	function() {
		it("should draw itself inside the bounds given through View.layout()",
		function(){
			var givenArguments;
			var fakeContext = {
				fillText: function(textToDraw, x, y, maxWidth) {
					givenArguments = arguments;
				}
			};
			textView.layout(20, 30, 40, 50);
			textView.text = "opa";
			textView.draw(fakeContext);
			expect(givenArguments).toEqual({'0':'opa', '1':20, '2':30, '3':20});
		});
	});
});