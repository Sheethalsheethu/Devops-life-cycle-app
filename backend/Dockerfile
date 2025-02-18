# Use Node.js official image
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the app files
COPY . .

# Expose port
EXPOSE 5000

# Run the application
CMD ["node", "app.js"]
