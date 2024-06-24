FROM node:14-alpine

# Install global dependencies
RUN npm install -g webpack webpack-cli osjs-cli

# Create app directory
WORKDIR /usr/src/osjs

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

EXPOSE 8000
CMD ["npm", "start"]
