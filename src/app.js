const { connectMQTT } = require('./Configs/MqttClient');
const { generateSensorData } = require('./Utils/Data');
const envConfig = require('./Configs/envConfig');

const clientId = 'emqx_publisher_' + Math.random().toString(16).substring(2, 8);

// Connect to the broker using environment variables
const client = connectMQTT({
    clientId,
    username: envConfig.username,
    password: envConfig.password,
    brokerUrl: envConfig.brokerUrl,
});

// Publish sensor data at regular intervals
client.on('connect', () => {
    setInterval(() => {
        const message = JSON.stringify(generateSensorData());
        client.publish(envConfig.topic, message, { qos: envConfig.qos }, (error) => {
            if (error) {
                console.error('Publish error:', error);
            } else {
                console.log(`Message published to topic '${envConfig.topic}': ${message}`);
            }
        });
    }, 1000);
});
