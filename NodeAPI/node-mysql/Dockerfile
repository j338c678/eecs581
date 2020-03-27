# LTS version of node from Docker Hub
FROM node:carbon

# Set working directory of program
# Holds application code inside Docker image
WORKDIR /app

# Copy application dependencies
# Wildcard * copies from package_lock.json as well
COPY package*.json /app/

# Install application dependencies
RUN apt-get update
RUN apt -y install netcat
RUN npm install

# Bundle application source code inside Docker image
COPY . /app

# Bind application to port
# Expose port so that it will be mapped by Docker daemon
EXPOSE 8080

# Define runtime using command to run application
CMD ["./db_watcher.sh"]
