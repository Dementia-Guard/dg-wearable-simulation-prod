require('dotenv').config();

const envConfig = {
    brokerUrl: process.env.MQTT_BROKER_URL,
    username: process.env.MQTT_USERNAME,
    password: process.env.MQTT_PASSWORD,
    topic: process.env.MQTT_TOPIC,
    pubSimuPort: process.env.PUB_SIMU_PORT,
    qos: parseInt(process.env.MQTT_QOS, 10),
};

module.exports = envConfig;
