# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port (optional, MQTT uses outgoing connections, so not strictly needed)
EXPOSE 1883

# Start the server
CMD [ "node", "src/app.js" ]