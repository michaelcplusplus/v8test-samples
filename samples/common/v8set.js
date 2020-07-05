function main() { 
  
  let originalArray = [1, 2, 3, 4, 1, 2, 3, 4]  
  let uniqueArray = Array.from(new Set(originalArray)) // uniqueArray = [1, 2, 3, 4]

  console.log(originalArray)
  
  console.log(uniqueArray)

  return ""; 
};