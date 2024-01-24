# Stage 1: Build Node.js app
FROM node:14 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Build Nginx image
FROM nginx:latest

# Set the working directory in the Nginx container
WORKDIR /usr/share/nginx/html

# Copy the built app from the Node.js build stage
COPY --from=builder /app .

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
