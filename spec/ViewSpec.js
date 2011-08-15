describe("View",
function() {
	var view;

	beforeEach(function() {
		view = new View();
	});
	
	describe("#layout",
	function() {
		it("should retain the given values",
		function() {
			view.layout(1, 2, 3, 4);
			expect(view.left).toBe(1);
			expect(view.top).toBe(2);
			expect(view.right).toBe(3);
			expect(view.bottom).toBe(4);
		});	
	});
	
	it("should draw",
	function() {
		expect(typeof(view.draw)).toBe("function");
	});
	
});