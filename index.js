var recipes = {};


 function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]:value});
 }

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {

    return Object.assign(object, {[key]:value});
}

 function deleteFromObjectByKey(object, key) {
   var clone = Object.assign({}, {['object']:key})
   delete clone.object;
   return clone;
 }


function destructivelyDeleteFromObjectByKey(object, key) {
  // var clone = {['object']:key};
  // delete clone.object;
  // return clone;
var clone = Object.assign( [object]: value )
delete clone.object;
return clone;
}
