FROM node:21-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN corepack enable

RUN yarn install

COPY . .

CMD [ "yarn", "dev" ]