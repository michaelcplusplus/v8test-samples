function main() {

  _write("/storage/emulated/0/jstest/test.json", "hello world: "+ new Date());
  
  var content = _read("/storage/emulated/0/jstest/test.json");
  
  console.log(content);
   
  return "";
};
