import assert from "assert";
import isWeekday from "../JS/isWeekday.js";


describe('isWeekday function test', function () {
    it('isWeekday should return false if not weekdays', function () {
        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Sunday'), false);
    });
    it('isWeekday should return true if it is the weekdays', function() {
        assert.equal(isWeekday('Monday'), true);
        assert.equal(isWeekday('Tuesday'), true);
        assert.equal(isWeekday('Wednesday'), true);
        assert.equal(isWeekday('Thursday'), true);
        assert.equal(isWeekday('Friday'), true);

    });

});