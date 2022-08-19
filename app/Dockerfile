FROM node

EXPOSE 3000

WORKDIR /workspace/app

COPY package*.json ./

RUN npm install && npx next build
