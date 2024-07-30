import assert from "assert";
import findItemsOver20 from "../JS/findItemsOver20.js";


describe('findItemsOver20 function test', function () {
    it('findItemsOer20 should return items over 20 for the ItemList', function () {
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        
        var results = [
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ];
        
        
        assert.deepEqual(results, findItemsOver20(itemList));

        console.log('findItemsOver20 passed!')
    });
    it('findItemsOer20 should return items over 20 for the ItemList2', function () {
        
        var itemList2 = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 19},
            {name : 'bananas', qty : 17},
            {name : 'apples', qty : 3},
        ];
        
        var results2 = [];
        

        assert.deepEqual(results2, findItemsOver20(itemList2));

        console.log('findItemsOver20 passed!')
    });
    it('findItemsOer20 should return items over 20 for the ItemList3', function () {
        
        var itemList3 = [
            {name : 'apples', qty : 40},
            {name : 'pears', qty : 20},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ];
        
        var results3 = [
            {name : 'apples', qty : 40},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ];

        assert.deepEqual(results3, findItemsOver20(itemList3));
        
        console.log('findItemsOver20 passed!')        

    });

});