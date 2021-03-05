//http get example with parameters
function main() { 
  rq = {
    url: "http://httpbin.org/anything",
    method: "GET",
    queryParams: [
	    	{ "key": "hello",
		     	"value": "world"
     },{
		     	"key": "hello1",
			     "value": "world2"
     }]
  }
	 
  x = http.request(JSON.stringify(rq))
  console.log(x.statuscode)
  console.log(x.content)

  return JSON.parse(x.content).url
};
    
    
    
