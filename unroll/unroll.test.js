const {unroll, unroll2} = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });
  it("is a function", function () {
    expect(typeof unroll2).toEqual("function");
  });

});

//Test 1st function
describe("Test unroll", function(){
  it("works unrolls example 1", function () {
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];

    expect(unroll(square)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
  });

  it("works unrolls example 2", function () {
    const smallerSquare = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ];

    expect(unroll(smallerSquare)).toEqual(["a", "b", "c","d", "e", "f","g", "h", "i"]);
  });
})

  //Test recursive function

  describe("Test unroll2", function(){
    it("works unrolls example 1", function () {
      const square = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
      ];
      let i = 0, j = 0
      let arr = []
  
      expect(unroll2(square,i,j,arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
    });
  
    it("works unrolls example 2", function () {
      const smallerSquare = [
        ["a", "b", "c"],
        ["d", "e", "f"],
        ["g", "h", "i"]
      ];
      let i = 0, j = 0
      let arr = []
  
      expect(unroll2(smallerSquare,i,j,arr)).toEqual(["a", "b", "c","d", "e", "f","g", "h", "i"]);
    });
  })
  
  

