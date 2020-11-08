# This defines our starting point
FROM node:10

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# install and cache app dependencies
RUN npm install -g @angular/cli@9.0

COPY package.json /usr/src/app/package.json
RUN npm install

COPY . /usr/src/app
