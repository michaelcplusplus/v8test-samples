function myOnMqttMessage(topic, payload) {
  console.error(topic)
  console.error(payload)
}

function main() {  

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
  
  var topic = "temp/random";
  console.log("<b>mqtt subscribe " + topic + "</b>");
  
  //topic, qos
  mqtt.subscribe(topic, 1);    

  //topic, payload, qos, retained	
  mqtt.publish(topic, new Date(), 1, true);
  

  _msleep(150)
  mqtt.disconnect();

  return "..."; 
};
    
    
    
    
 
