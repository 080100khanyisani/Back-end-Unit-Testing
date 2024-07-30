import assert from "assert";
import countRegNumber from "../JS/countRegNumber.js";

describe('countRegNumber function test', function () {
    it('countRegNumber should return the three counts of the registration numbers recorded', function () {
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
    });
    it('countRegNumber should return the one count of the registration number recorded', function() {
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);

    });

});