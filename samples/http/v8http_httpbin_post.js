//http post example with body
function main() { 
  rq = {
    url: "https://httpbin.org/anything",
    contentType: "application/json; charset=UTF-8",
    method: "POST",
    rawData: "{\"id\":42, \"myval\":\"Hello world\"}"
  }

  x = http.request(JSON.stringify(rq))
  console.log(x.statuscode)
  console.log(x.content)

  return JSON.parse(x.content).data
};
    
    
    
