FROM node:6.11

COPY . .

RUN npm install

EXPOSE 8001
CMD [ "node", "app/server.js" ]
