import assert from "assert";
import countAllFromTown from "../JS/countAllFromTown.js";


describe('countAllFromTown function test', function () {
    it('countAllFromTown should return a count of all registration numbers from town that are from Stellies', function () {
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL');
        //fromStellies should contains
        assert.equal(fromStellies, 3)
    });
    it('countAllFromTown should return a count of all registration numbers from town that are from Kuilsriver', function() {
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341', 'CF');
        //fromStellies should contains
        assert.equal(fromKuilsriver, 1)

    });

});