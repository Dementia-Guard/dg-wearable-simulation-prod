const express = require('express');
const app = express();
const { connectMQTT } = require('./Configs/MqttConfig');
const { generateSensorData } = require('./Utils/Data');
const envConfig = require('./Configs/envConfig');

const PORT = envConfig.pubSimuPort; // Port for Express server
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

//route for health check
app.get('/', (req, res) => {
    res.status(200).json({ code:200,sucess:true,status: 'online',data:{message:"simulated publisher is running"} });
});
// Start Express server
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});