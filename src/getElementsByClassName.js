// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

//https://learn.makerpass.com/groups/hrsf102/courses/reactorcore/course.recursion

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  return document.getElementsByClassName(className);
};

/*
var htmlStrings = [
  '<div class="targetClassName"></div>',
  '<div class="otherClassName targetClassName"></div>',
  '<div><div class="targetClassName"></div></div>',
  '<div><div class="targetClassName"><div class="targetClassName"></div></div></div>',
  '<div><div></div><div><div class="targetClassName"></div></div></div>',
  '<div><div class="targetClassName"></div><div class="targetClassName"></div></div>',
  '<div><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></div>'
];

describe('getElementsByClassName', function() {

  it('should match the results of calling the built-in function', function() {
    $('body').addClass('targetClassName');
    htmlStrings.forEach(function(htmlString) {
      var $rootElement = $(htmlString);
      $('body').append($rootElement);

      var result = getElementsByClassName('targetClassName');
      var expectedNodeList = document.getElementsByClassName('targetClassName');
      var expectedArray = Array.prototype.slice.apply(expectedNodeList);
      var equality = _.isEqual(result, expectedArray); // why can't we use `===` here?
      expect(equality).to.equal(true);

      $rootElement.remove();
    });
    $('body').removeClass('targetClassName');
  });

});
*/

/*
Bare minimum Requirements
Replace stringifyJSON with your own function in src/stringifyJSON.js, and make the specs pass.
Implement getElementsByClassName with your own function in src/getElementsByClassName.js, and make the specs pass.
You should use document.body, element.childNodes, and element.classList
*/