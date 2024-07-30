import assert from "assert";
import transportFee from "../JS/transportFee.js";


describe('transportFee function test', function () {
    it('transportFee should return R20 for a morning transport fee', function () {
        assert.equal(transportFee('morning'), 'R20');
    });
    it('transportFee should return R10 for an afternoon transport fee', function() {
        assert.equal(transportFee('afternoon'), 'R10');
    });
    it('transportFee should return free for a night shift', function() {
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');

    });

});