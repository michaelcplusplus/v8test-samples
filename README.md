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
* `url` broker url, `String`
* `clientId` id of the client, `String`
* `options` server options, `JSON - String`
Connects to the broker specified by the given url and options
   `url` examples:
   `tcp://test.mosquitto.org:1883`
   `ssl://test.mosquitto.org:8883`


**mqtt.publish(topic, message, qos, retain)**
* `topic` is the topic to publish to, `String`
* `message` is the message to publish, `String`
* `qos` QoS level, `Number`
* `retain` retain flag, `Boolean`


