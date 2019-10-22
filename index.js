// Code your solution here

function findMatching(arr, name) {
  return arr.filter(n => n.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(arr, input) {
  let w = arr.map(word => word.slice(0, input.length))
  let f = w.filter(l => l === input)
  return f
}

function matchName() {
  
  
}