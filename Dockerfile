FROM node:11-alpine
# Set the working directory
RUN mkdir -p /usr/app
WORKDIR /usr/app
# copy package.json into the container
COPY package.json /usr/app/
# install dependencies
RUN npm i -g nodemon \
    && npm install --quiet
RUN npm install dotenv
# Copy the current directory contents into the container
COPY . /usr/app/
# Make port 5000 available to the world outside this container
EXPOSE 5000
# Run the app when the container launches
CMD ["npm", "start"]