function main() { 
  console.log("main");
  var serverKey = "your server key"
  var msg = { 
  "notification": { 
    "title": "your title", 
    "body": "your body", 
    "icon": "notification"
    },
  "to" : "your device " , 
  "data": {
    "message" : "your message"
    }
  }; 
  msg.notification.body = new Date().toISOString()

  fcm.publish(serverKey, JSON.stringify(msg));
  return ""; 
};
    
