import assert from "assert";
import fromWhere from "../JS/fromWhere.js";

describe('fromWhere function test', function () {
    it('fromWhere should return Bellville if the registration number begins with CY', function () {
        assert.equal(fromWhere('CY 567489'), 'Bellville');
    });
    it('fromWhere should return Paarl if the registration number begins with CJ', function() {
        assert.equal(fromWhere('CJ 343502'), 'Paarl');
    });
    it('fromWhere should return Cape Town if the registration number begins with CA', function() {
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
    });
    it('fromWhere should return Some other place! if the registration number does not begin CY, CJ and CA', function() {
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    });

});