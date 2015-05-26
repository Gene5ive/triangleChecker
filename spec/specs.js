describe('trianglePresent', function() {
  it("returns true if it is a triangle", function() {
    expect(trianglePresent([4, 5, 6])).to.equal(true);
  });

  it("returns false if it is not a triangle", function() {
    expect(trianglePresent([1, 2, 3])).to.equal(false);
  });
});

describe('equilateral', function() {
  it("returns true if all side are equal", function() {
    expect(equilateral([2, 2, 2])).to.equal(true);
  });

  it("returns false if all side are not equal", function() {
    expect(equilateral([1, 2, 3])).to.equal(false);
  });
});

describe('isosceles', function() {
  it("returns true if isosceles", function() {
    expect(isosceles([5, 5, 3])).to.equal(true);
  });

  it("returns false if not isosceles", function() {
    expect(isosceles([2, 3, 4])).to.equal(false);
  });
});

describe('scalene', function() {
  it("returns true if scalene", function() {
    expect(scalene([4, 5, 6])).to.equal(true);
  });

  it("returns false if not scalene", function() {
    expect(scalene([2, 2, 2])).to.equal(false);
  });
});

describe('triangleType', function() {
  it("returns 'null' when not a triangle", function() {
    expect(triangleType([4, 5, 10])).to.equal(null);
  });

  it("returns 'equilateral' if it is equilateral", function() {
    expect(triangleType([3, 3, 3])).to.equal("equilateral");
  });

  it("returns 'isosceles' if it is isosceles", function() {
    expect(triangleType([5, 5, 3])).to.equal("isosceles");
  });

  it("returns 'scalene' if it is scalene", function() {
    expect(triangleType([4, 5, 6])).to.equal("scalene");
  });
});
