//http basic auth example
function main() { 
  rq = {
    url: "https://httpbin.org/basic-auth/myuser/mypasswd",
    method: "GET",
    basicAuth: {
      username: "myuser",
      password: "mypasswd"
    }
  }
	  
  x = http.request(JSON.stringify(rq))
  console.log(x.statuscode)
  console.log(x.content)

  rq.basicAuth.password = "wrong password";
  x = http.request(JSON.stringify(rq))
  console.error(x.statuscode)
  
  return ""
};
    
