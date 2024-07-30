import assert from "assert";
import totalPhoneBill from "../JS/totalPhoneBill.js";


describe('totalPhoneBill function test', function () {
    it('totalPhoneBill should return R7.45 for two calls and three sms', function () {
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
    it('totalPhoneBill should return R3.40 for one call and one sms', function() {
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });
    it('totalPhoneBill should return R1.30 for two sms', function() {
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });

});