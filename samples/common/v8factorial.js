var factorial = function(number) { 
  if (number <= 0) { // terminal case
    return 1; 
  } else { // block to execute 
    return (number * factorial(number - 1)); 
  } 
}; 

function main() {
  var r = factorial(8);
  return r;
}

