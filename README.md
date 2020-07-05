# v8test-samples

#Table of contents
1. [Introduction](#introduction)
2. [MQTT API](#mqtt_api)


## Introduction <a name="introduction"></a>
Sample files for Android app Exec JS V8 see https://play.google.com/store/apps/details?id=de.mlauer.v8test

![Alt text](/screenshots/Screenshot_2020-06-27-12-05-44.png?raw=true "Screenshot input form")

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
