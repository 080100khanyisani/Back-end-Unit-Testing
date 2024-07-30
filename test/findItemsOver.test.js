import assert from "assert";
import findItemsOver from "../JS/findItemsOver.js";


describe('findItemsOver function test', function () {
    it('findItemsOver should return all items over 20 and returns the result for ItemList', function () {
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
        
        assert.deepEqual(results, findItemsOver(itemList, 20));

        console.log('findItemsOver passed!');
    });
    it('findItemsOver should return all items over 20 and returns the result for ItemList2', function () {
        
        var itemList2 = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 19},
            {name : 'bananas', qty : 17},
            {name : 'apples', qty : 3},
        ];
        
        var results2 = [];
        

        assert.deepEqual(results2, findItemsOver(itemList2, 20));

        console.log('findItemsOver passed!');
    });
    it('findItemsOver should return all items over 20 and returns the result for ItemList3', function () {
        
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

        assert.deepEqual(results3, findItemsOver(itemList3, 20));
        
        console.log('findItemsOver passed!');
        
        

    });

});