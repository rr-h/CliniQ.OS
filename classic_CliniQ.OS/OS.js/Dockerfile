# Use the Node.js 22 slim image
FROM node:22-buster-slim

# Install necessary global packages
RUN npm install -g webpack webpack-cli

# Install Python and build essentials for node-gyp
RUN apt-get update && apt-get install -y python3 make g++ && \
    ln -sf python3 /usr/bin/python

# Set the working directory
WORKDIR /usr/src/osjs

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Expose port (if necessary)
EXPOSE 8080

# Start the application
CMD ["npm", "start"]
