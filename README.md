# v8test-samples

# Table of contents
1. [Introduction](#introduction)
2. [BASI API](#basic_api)
3. [MQTT API](#mqtt_api)
4. [FCM API](#fcm_api)
5. [Examples](#examples)
5.1 [Input](#example_input)
5.2 [FCM](#example_fcm)


## Introduction <a name="introduction"></a>
Sample files for Android app Exec JS V8 see Google playstore https://play.google.com/store/apps/details?id=de.mlauer.v8test  
The app has full ECMAScript 2016 (ECMA-262) support.

![Alt text](/screenshots/v8mqtt_test.gif?raw=true "MQTT test script")

## Basic API <a name="basic_api"></a>
* console.log()
* console.error()
* console.warn()
* \_read()
* \_write()
* \_inputForm()

**console.log(data)**  
Prints to result view  
Text color: blue

**console.error(data)**  
Prints to result view  
Text color: red

**\_read(filename, \[\convert])**  
Read filename and return content as string
* `filename` filename, `String`
* `convert` optional: convert from iso8859 to utf-8 , `Number 0(default) or 1`  


**\_write(filename, content)**  
Write content to file

**\_inputForm(title, default)**
Open a input dialog. 
* `title` title of the dialog, `String`
* `default` default value of the input field, `String`  

[Example file v8input.js](/samples/common/v8input.js)

## MQTT API <a name="mqtt_api"></a>
* mqtt.connect()
* mqtt.publish()
* mqtt.subscribe()
* mqtt.disconnect()
* mqtt.onMqttMessage()

**mqtt.connect(url, clientId, options)**  
Connects to the broker specified by the given url and options  
* `url` broker url, `String`  
  examples:  
  `tcp://test.mosquitto.org:1883`  
  `ssl://test.mosquitto.org:8883`  
* `clientId` id of the client, `String`
* `options` server options, `JSON - String`


**mqtt.publish(topic, payload, qos, retain)**  
Publish a message to a topic
* `topic` is the topic to publish to, `String`
* `payload` is the message to publish, `String`
* `qos` QoS level, `Number`
* `retain` retain flag, `Boolean`

**mqtt.subscribe(topic, qos)**  
Subscribe to a topic
* `topic` is the topic to publish to, `String`
* `qos` QoS level, `Number`

**mqtt.disconnect()**  
Disconnect from the broker

**mqtt.onMqttMessage(callback)**  
Call back function fired when message arrives
* `callback - function (topic, payload)` 

[Example file v8mqtt_test.js](/samples/mqtt/v8mqtt_test.js)

## FCM API <a name="fcm_api"></a>
* fcm.publish()

**fcm.publish(serverKey, message)**  
Publish a Firebase cloud message 
* `serverKey` your server keyt, `String`
* `message` message to publisg, `JSON - String`

[Example file v8fcm.js](/samples/fcm/v8fcm.js)

## Examples <a name="examples"></a>
## Input form example <a name="example_input"></a>
![Alt text](/screenshots/v8input.gif?raw=true "Input form")
## FCM example <a name="example_fcm"></a>
![Alt text](/screenshots/v8fcm.gif?raw=true "FCM")