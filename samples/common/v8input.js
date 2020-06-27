//simple test function
function main() { 
  _log("main");
  var ret = _inputForm("Input:");

  _log(parseInt(ret) + 1);

  var foo = "V8: " + ret + " finished!"
  return foo; 
};
    
    