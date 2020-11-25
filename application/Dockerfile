FROM node:12.19.0-alpine3.10

RUN /bin/sh -c "apk add --no-cache bash"

WORKDIR /app

COPY package.*json ./
RUN npm install
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]