const generateSensorData = () => {
    return {
        dgWearId:"5345bgesb4w534",
        temperature: (20 + Math.random() * 10).toFixed(2),  // Temperature in Celsius, e.g., 20-30°C
        location: {
            latitude: (34.0522 + (Math.random() - 0.5) * 0.01).toFixed(6),  // Near a central lat (e.g., 34.0522)
            longitude: (-118.2437 + (Math.random() - 0.5) * 0.01).toFixed(6) // Near a central lon (e.g., -118.2437)
        },
        pulseRate: Math.floor(60 + Math.random() * 40),    // Pulse rate between 60 and 100 bpm
        bloodOxygen: (90 + Math.random() * 10).toFixed(2),   // Blood oxygen level in %, normal range 90-100%
        stepCount: Math.floor(Math.random() * 200),         // Random step count in the last interval
        isIndoor:true,
        accelerometer: {
            x: (Math.random() * 2 - 1).toFixed(3), // Random value between -1 and 1 for x-axis
            y: (Math.random() * 2 - 1).toFixed(3), // Random value between -1 and 1 for y-axis
            z: (Math.random() * 2 - 1).toFixed(3)  // Random value between -1 and 1 for z-axis
        },
        gyroscope: {
            x: (Math.random() * 500 - 250).toFixed(2), // Random value between -250 and 250 for x-axis
            y: (Math.random() * 500 - 250).toFixed(2), // Random value between -250 and 250 for y-axis
            z: (Math.random() * 500 - 250).toFixed(2)  // Random value between -250 and 250 for z-axis
        }
    }
};

module.exports = { generateSensorData };