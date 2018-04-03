var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (array, element){
var newArray = []
var newArray2 = [element, ...newArray]
return newArray2

}

function destructivelyAddElementToBeginningOfArray (array, element){
  return array.unshift(element)
}

function addElementToEndOfArray (array, element){
  var newArray = []
  return newArray.push(element)
}

function destructivelyAddElementToEndOfArray (){
  return array.push(element)
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
