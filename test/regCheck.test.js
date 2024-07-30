import assert from "assert";
import regCheck from "../JS/regCheck.js";


describe('regCheck function test', function () {
    it('should return true if registration number is from Gauteng Province', function () {
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });
    it('regCheck should return false if the registration number is not from Gauteng Province', function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });
    it('regCheck should return true if registration number is from Limpopo', function() {
        assert.equal(regCheck('5566 L', 'L'), true);
    });
    it('regCheck should return false if the registration number is not from Limpopo', function() {
        assert.equal(regCheck('5566 L', 'M'), false);
    });
    it('regCheck should return true if registration number is from Eastern Cape', function() {
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
    });
    it('regCheck should return false if the registration number is not from Eastern Cape', function() {
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
    });
    it('regCheck should return true if the registration number is from Mpumalanga', function() {
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
    });
    it('regCheck should return false if the registration number is not from Mpumalanga', function() {
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    });

});