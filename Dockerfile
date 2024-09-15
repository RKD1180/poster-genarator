# Stage 1: Build the React app
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Expose port 3000 for the app
EXPOSE 3000

# Command to start the development server, after ensuring the host is 0.0.0.0
CMD ["npm", "run", "dev"]