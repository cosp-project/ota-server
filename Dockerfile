FROM node:8
LABEL maintainer="David Sn <divad.nnamtdeis@gmail.com>"

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .
ENTRYPOINT ["npm", "run", "start"]