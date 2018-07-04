// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  return JSON.stringify(obj);
};

/*
// test cases are described in fixtures.js
describe('stringifyJSON', function() {
  it('should match the result of calling JSON.stringify', function() {

    stringifiableObjects.forEach(function(test) {
      var expected = JSON.stringify(test);
      var result = stringifyJSON(test);
      expect(result).to.equal(expected);
    });

    unstringifiableValues.forEach(function(obj) {
      var expected = JSON.stringify(obj);
      var result = stringifyJSON(obj);
      expect(result).to.equal(expected);
    });

  });
});

var validStrings, invalidStrings, // used for stringifyJSON and parseJSON specs
  weirdObjects; // used for stringifyJSON spec

var stringifiableObjects = [
  9,
  null,
  true,
  false,
  'Hello world', [],
  [8],
  ['hi'],
  [8, 'hi'],
  [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
  [8, [
    [], 3, 4
  ]],
  [
    [
      [
        ['foo']
      ]
    ]
  ],
  {},
  {
    'a': 'apple'
  },
  {
    'foo': true,
    'bar': false,
    'baz': null
  },
  {
    'boolean, true': true,
    'boolean, false': false,
    'null': null
  },
  // basic nesting
  {
    'a': {
      'b': 'c'
    }
  },
  {
    'a': ['b', 'c']
  },
  [{
    'a': 'b'
  }, {
    'c': 'd'
  }],
  {
    'a': [],
    'c': {},
    'b': true
  }
];

// used for stringifyJSON spec
// hint: JSON does not allow you to stringify functions or
// undefined values, so you should skip those key/value pairs.
unstringifiableValues = [{
  'functions': function () {},
  'undefined': undefined
}];


*/