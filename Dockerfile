FROM node:17-alpine3.12

WORKDIR /opt/app

COPY package.json ./

RUN npm install D

COPY . . 

EXPOSE 8080

CMD ["npm", "start"] 