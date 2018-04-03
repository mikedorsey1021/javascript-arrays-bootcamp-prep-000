var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (arrays, element){
return arrays.unshift(element)

}

function destructivelyAddElementToBeginningOfArray (array, element){
  return array.unshift()
}

function addElementToEndOfArray (array, element){
  var newArray = []
  return newArray.push()
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
