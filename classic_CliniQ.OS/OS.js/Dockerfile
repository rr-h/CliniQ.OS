# Use the Node.js 18 slim image
FROM node:18-buster-slim

# Set locale
RUN apt-get update && apt-get install -y locales && \
    echo "en_US.UTF-8 UTF-8" > /etc/locale.gen && \
    locale-gen

ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

# Install necessary global packages
RUN npm install -g webpack webpack-cli @osjs/cli

# Install Python, build essentials, and PAM development files for node-gyp
RUN apt-get update && apt-get install -y python3 make g++ libpam0g-dev && \
    ln -sf python3 /usr/bin/python

# Set the working directory
WORKDIR /usr/src/osjs

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies with --legacy-peer-deps flag
RUN npm install --legacy-peer-deps

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Expose port (if necessary)
EXPOSE 8080

# Start the application
CMD ["npm", "start"]
