# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install deps
COPY package*.json ./
RUN npm install --production

# Copy all backend code
COPY . .

# Expose backend port
EXPOSE 5002

# Run server
CMD ["node", "index.js"]
