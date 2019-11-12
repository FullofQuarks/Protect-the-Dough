FROM node:latest
USER node

WORKDIR /home/node/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
CMD [ "node" , "start.js" ]
