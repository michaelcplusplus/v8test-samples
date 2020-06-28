function myOnMqttMessage(topic, payload) {
  console.error(topic)
  console.error(payload)
}

function main() {  

  var options = {};

  //options.username = "mqtt";
  //options.password = "secret";
  options.useSSL = true;
  options.cleanSession = false;
  //The certificate authority file (PEM FORMAT) has to be placed in the jstest directory.
  options.certFile = "mosquitto.org.crt";
  
  mqtt.connect(
    "ssl://test.mosquitto.org:8883",
    "js1Client1", 
    JSON.stringify(options));
  
  mqtt.onMqttMessage = myOnMqttMessage;

  var topic = "temp1/random";
  
  console.log("<b>mqtt subscribe " + topic + "</b>");
  
  //topic, qos
  mqtt.subscribe(topic, 1);    

  //topic, payload, qos, retained	
  mqtt.publish(topic, Date.now(), 1, true);
  mqtt.publish(topic, Date.now(), 1, true);

  _msleep(500);
  mqtt.disconnect();

  return "..."; 
};
    
    
    
    
 
    
    
    
    
