# Specify a base image
FROM node:alpine

# Working directory
WORKDIR /app

# Copy build file
COPY package.json .

# Install some depencies
RUN npm install

# Copy everything else
COPY . .

# Set up default command
CMD ["npm", "start"]