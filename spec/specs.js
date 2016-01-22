describe('pingPong', function(limit) {
  it("counts up to the 'limit'", function () {
    expect(limit(5)).to.eql([1, 2, 3, 4, 5]);
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
