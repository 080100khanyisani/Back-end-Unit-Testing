import assert from "assert";
import isFromBellville from "../JS/isFromBellville.js";

describe('isFromBellville function test', function () {
    it('should return true if registration number is from Bellville', function () {
        assert.equal(isFromBellville('CY 123'), true);
       

    });
    
    it('should return false if is not registration number is from Bellville', function () {
        assert.equal(isFromBellville('CA 123'), false);

    });



});