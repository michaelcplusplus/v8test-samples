//http header example
function main() { 
  rq = {
    url: "https://httpbin.org/headers",
    method: "GET",
    headerData: [
      {key: "X-Timezone-Iana", value: "Europe/Berlin"}
    ]
  }

  x = http.request(JSON.stringify(rq))
  console.log(x.statuscode)
  console.log(x.content)

  return x.statuscode
};
    
    
    
