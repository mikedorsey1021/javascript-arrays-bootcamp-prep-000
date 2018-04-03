var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (arrays, element){
var newArray = [element, ...arrays]
return newArray
}

function destructivelyAddElementToBeginningOfArray (array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray (array, element){
  var newArray = [...array, element]
  return newArray 
}

function destructivelyAddElementToEndOfArray (array, element){
  return array.push()
}

function accessElementInArray (array, index){
  var array = array;
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array){
  return array.shift()
}

function removeElementFromBeginningOfArray (array){
  var newArray = array
  return newArray.slice(1)
}

function destructivelyRemoveElementFromEndOfArray (array){
  return array.pop()
}
