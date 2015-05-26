var trianglePresent = function(sides) {
  if ((sides[0] >= (sides[1] + sides[2])) ||
      (sides[1] >= (sides[0] + sides[2])) ||
      (sides[2] >= (sides[0] + sides[1]))) {
    return false;
  } else {
    return true;
  };
};

var equilateral = function(sides) {
  if (sides[0] === sides[1] && sides[1] === sides[2]) {
    return true;
  } else {
    return false;
  };
};

var isosceles = function(sides) {
  if ((sides[0] === sides[1] || sides[0] === sides[2]) ||
      (sides[1] === sides[2])) {
        return true;
  } else {
    return false;
  };
};

var scalene = function(sides) {
  if (sides[0] !== sides[1] && sides[1] !== sides[2]) {
    return true;
  } else {
    return false;
  };
};

var triangleType = function(sides) {
  if (!trianglePresent(sides)) {
    return null;
  } else if (equilateral(sides)) {
    return "equilateral";
  } else if (isosceles(sides)) {
    return "isosceles";
  } else if (scalene(sides)) {
    return "scalene";
  };
};


$(document).ready(function() {
  $("form").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());

    var type = triangleType([side1, side2, side3]);

    // If not a triangle
    if (!type) {
      $("#not-triangle").show();
      $("#is-triangle").hide();
    } else {
      $("#not-triangle").hide();
      $("#is-triangle").show();
      $('#triangle-type').text(type);
    }

    event.preventDefault();
  });
});
