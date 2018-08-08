var recipes = {};


 function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]:value});
 }

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {

    return Object.assign(object, {[key]:value});
}

 function deleteFromObjectByKey(object, key) {

 }


function destructivelyDeleteFromObjectByKey(object, key) {
  var clone = {object:'key'};
  delete clone.object;
  return clone;
}
