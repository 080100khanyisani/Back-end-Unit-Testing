import assert from "assert";
import countAllPaarl from "../JS/countAllFromPaarl.js";


describe('countAllPaarl function test', function () {
    it('countAllPaarl should return the count of all Paarl registration numbers when presented with many random registration numbers', function () {
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });
    it('countAllPaarl should return the count of all Paarl registration numbers when presented with a few random registration numbers', function() {
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    });

});