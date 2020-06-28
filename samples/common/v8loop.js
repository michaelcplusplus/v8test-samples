//!require(leftpad.js)

let max = 30;
let text = "*du Lauch* 💥";
let count = 2;

function print(i) {
  return leftpad(text + "\n" , text.length+i%max," ");
}

function main() { 
  var foo = ""; 
  text = _inputForm("Input:",text)
  for (var j=1; j<count; j++){
    for (i=1;i<=max-1;i++)
      foo += print(i);  
    for (i=max-1;i>0;i--)
      foo += print(i);
  }
  return foo; 
};
    
