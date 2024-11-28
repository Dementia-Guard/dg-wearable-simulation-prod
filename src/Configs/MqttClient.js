const mqtt = require('mqtt');

const connectMQTT = ({ clientId, username, password, brokerUrl }) => {
    const client = mqtt.connect(brokerUrl, {
        clientId,
        username,
        password,
    });

    client.on('connect', () => {
        console.log(`Connected to broker with client ID: ${clientId}`);
    });

    client.on('error', (error) => {
        console.error('Connection error:', error);
    });

    return client;
};

module.exports = { connectMQTT };
