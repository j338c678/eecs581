FROM node:lts-alpine

RUN npm install -g vue-cli
RUN npm i -D webpack-cli
RUN npm install --save fs net

# install simple http server for serving static content
RUN npm install -g http-server

# install the mysql database
RUN npm install mysql

# make the 'app' folder the current working directory
WORKDIR ../eecs581

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

#Revert Webpack to working version
RUN npm install --save-dev webpack-dev-server@2.9.7

#Expose Application Port
EXPOSE 1874
EXPOSE 3306

# build app for production with minification
CMD ["npm", "run", "dev"]

