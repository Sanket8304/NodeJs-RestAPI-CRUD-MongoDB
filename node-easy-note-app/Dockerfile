FROM node:10-alpine

# Creating Work Directory
WORKDIR /usr/src/app

# Copy package.json
COPY package*.json ./

# Run npm install
RUN npm install

# Bundle the APP
COPY . .

# Opening Port
EXPOSE 3000

# Running the Project
CMD ["node", "server.js"]