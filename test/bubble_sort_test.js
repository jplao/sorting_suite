const assert = require('chai').assert;
const bubbleSort = require('../bubble_sort');

describe("Bubble Sort", function(){
  it("can sort an array", function() {
    var unsorted = [4,2,1,3];
    var sorted = [1,2,3,4];

    actual = bubbleSort(unsorted);
    assert.deepEqual(sorted, actual);
  });

  it("can sort a medium array", function(){
    var unsorted = [5,11,4,15,2,1,12,3,13,7,14,9,10,6,8];
    var sorted = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    actual = bubbleSort(unsorted);
    assert.deepEqual(sorted, actual);
  });

  it("can sort a large array", function(){
    var unsorted = [22,32,17,33,2,24,34,19,35,42,36,25,37,16,45,18,39,21,26,46,29,31,38,41,43,20,44,27,47,5,11,4,15,40,1,12,3,13,7,14,9,10,6,8,30,23,28];
    var sorted = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47];

    actual = bubbleSort(unsorted);
    assert.deepEqual(sorted, actual);
  });
});
