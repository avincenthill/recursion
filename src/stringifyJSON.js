var stringifyJSON = function (obj) {
  let results = [];
  //handle string, null, boolean, and number objs
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (obj === null ||
    typeof obj === 'boolean' ||
    typeof obj === 'number') {
    return '' + obj;
  } else if (Array.isArray(obj)) {
    //handle empty arrays
    if (obj.length === 0) {
      return '[]';
    } else {
      //handle populated arrays recursively
      obj.forEach(element => {
        results.push(stringifyJSON(element));
      });
      return '[' + results + ']';
    }
  } else if (obj instanceof Object) {
    //handle objects
    let keys = Object.keys(obj);
    keys.forEach(key => {
      let keyElement = '"' + key + '":';
      var valueElement = obj[key];
      //handle functions and undefined values
      if (valueElement instanceof Function ||
        typeof valueElement === undefined) {
        results.push('');
        //handle string values
      } else if (typeof valueElement === 'string') {
        results.push(keyElement + '"' + valueElement + '"');
        //handle null, boolean, and number values
      } else if (valueElement === null ||
        typeof valueElement === 'boolean' ||
        typeof keValOut === 'number') {
        results.push(keyElement + valueElement);
      } else if (valueElement instanceof Object) {
        //handle object properties recursively
        results.push(keyElement + stringifyJSON(valueElement));
      }
    });
    return '{' + results + '}';
  }
};