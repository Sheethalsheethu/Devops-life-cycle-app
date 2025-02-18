# Use the official Nginx image as a base image
FROM nginx:alpine

# Copy the frontend files from the public folder into the Nginx directory
COPY public /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
