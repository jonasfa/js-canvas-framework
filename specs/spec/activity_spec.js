describe("Activity",
function() {
	var activity;

	beforeEach(function() {
		activity = new Activity();
	});

	it("should have a content view",
	function() {
		expect(typeof(activity.contentView)).toNotBe("undefined");
	});
});