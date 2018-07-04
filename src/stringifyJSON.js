// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

/*
The JSON.stringify() method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.
console.log(JSON.stringify({ x: 5, y: 6 }));
// expected output: "{"x":5,"y":6}"

*/

var stringifyJSON = function (obj) {
  // console.log(obj);
  var results = [];

  //terminating cases
  if (typeof obj === '"undefined"') {
    results.push('undefined');
  } else if (typeof obj === 'string') {
    results.push('"' + obj + '"');
  } else if (typeof obj === 'boolean') {
    results.push(String(obj));
  } else if (typeof obj === 'number') {
    results.push(String(obj));
  } else if (obj === null) {
    results.push('null');
  } else if (typeof obj === 'object') {
    // for (var key in obj) {
    //   console.log(key);
    //   results.push(key + stringifyJSON(obj[key]));
    // }
    results.push('[]');
  }

  // console.log('results= ' + results)
  for (let i = 0; i < results.length; i++) {
    return results[i];
  }
};

/*
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