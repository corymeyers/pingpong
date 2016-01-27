describe('pingPong', function(limit) {
  it("counts up to the 'limit'", function() {
    expect(pingPong(2)).to.eql([1, 2]);
  });

  it("replaces each number that is evenly divisible by 3 and replaces it with PING", function() {
    expect(pingPong(3)).to.eql([1, 2, "PING"]);
  });

  it("replaces each number that is evenly divisible by 5 with PONG", function() {
    expect(pingPong(5)).to.eql([1, 2, "PING", 4, "PONG"]);
  });

  it("replaces each number that is evenly divisible by 15 with PINGPONG", function() {
    expect(pingPong(15)).to.eql([1, 2, "PING", 4, "PONG", "PING", 7, 8, "PING", "PONG", 11, "PING", 13, 14, "PINGPONG"]);
  });
});



















// describe('triangleClass', function() {
//   it("is not a triangle", function() {
//     expect(triangleClass(5, 6, 22)).to.equal("notaTriangle");
//   });
//
//   it("is equilateral for if all sides are equal", function() {
//   expect(triangleClass(5, 5, 5)).to.equal("equilateral");
//   });
//
//   it("is isosceles if only two sides are equal", function() {
//   expect(triangleClass(4, 4, 2)).to.equal("isoceles");
//   });
//
//   it("is scalene if all sides are unequal", function() {
//     expect(triangleClass(5, 6, 2)).to.equal("scalene");
//   });
// });
