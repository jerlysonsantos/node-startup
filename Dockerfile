FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN chown -R root:root /app

CMD [ "npm", "start" ]
