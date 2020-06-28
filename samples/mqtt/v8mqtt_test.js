function myOnMqttMessage(topic, payload) {
  console.error(topic)
  console.error(payload)
}

function main() { 
  console.log("<b>mqtt test</b>");

  var options = {};

  //options.username = "mqtt";
  //options.password = "secret";
  //options.useSSL = false;
  options.cleanSession = true;
  //The certificate authority file (PEM FORMAT) has to be placed in the jstest directory.
  //options.certFile = "MyRootCA.pem";

  mqtt.connect(
    "tcp://test.mosquitto.org:1883", //brokerUrl
    "js1Client1", //clientId
    JSON.stringify(options));

  mqtt.onMqttMessage = myOnMqttMessage;



  var payload = {
    t : "hello mqtt",
    b : true,
    ts : new Date()
  };

  mqtt.subscribe("test/mqtt", 2);  
  
  mqtt.publish("test/mqtt", JSON.stringify(payload), 2, true);
  
  _msleep(150)
  mqtt.disconnect();
  
  return ""; 

};
    
    
    
