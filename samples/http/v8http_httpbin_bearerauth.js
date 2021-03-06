//http bearer authorization example
function main() { 
  rq = {
    url: "https://httpbin.org/bearer",
    method: "GET",
    authorization: "Bearer Bearertokenxyz"   
  }
	  
  x = http.request(JSON.stringify(rq))
  
  console.log(x.statuscode)
  console.log(x.content)

  return ""
}
    
