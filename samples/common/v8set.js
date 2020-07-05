
function checkForDuplicates(array) { 
  return new Set(array).size !== array.length 
}

function main() { 
  
  let originalArray = [1, 2, 3, 4, 1, 2, 3, 4]  
  let uniqueArray = Array.from(new Set(originalArray)) // uniqueArray = [1, 2, 3, 4]

  console.log(originalArray)
  console.log(checkForDuplicates(originalArray))
  
  console.log(uniqueArray)
  console.log(checkForDuplicates(uniqueArray))

  return ""; 
};
