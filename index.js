var recipes = {};


 function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]:value});
 }

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {

    return Object.assign(object, {[key]:value});
}

function deleteFromObjectByKey(object, key) {
 Object.assign({}, object, key);
 delete key;
 return object;
}
