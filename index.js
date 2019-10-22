// Code your solution here

function findMatching(arr, name) {
  return arr.filter(n => n.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(arr, input='') {
  return arr.filter(word => word.slice(0, input.length) === input)
}

function matchName(arr, input) {
  arr.filter(n => n.toLowerCase() === name.toLowerCase())
  
}