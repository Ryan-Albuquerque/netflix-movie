FROM node:latest
WORKDIR /app
COPY . .
CMD NODE_URLS=http://*:$PORT npm start