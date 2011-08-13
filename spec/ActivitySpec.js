describe("Activity",
function() {
	var activity;

	beforeEach(function() {
		activity = new Activity();
	});

	it("should receive an content view",
	function() {
		var view = new View();
		activity.setContentView(view);
		expect(activity.getContentView()).toBe(view);
	});
});