import assert from "assert";
import yearsAgo from "../JS/yearsAgo.js";


describe('yearsAgo function test', function () {
    it('yearsAgo should return the number of years it has been since 1976 from the current year', function () {
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));
    });
    it('yearsAgoshould return the number of years it has been since 2000 from the current year', function() {
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });

});