FROM node:18

WORKDIR /api

EXPOSE 3030

COPY . .

RUN yarn

RUN yarn lint

RUN yarn test

RUN yarn build

RUN yarn seed

RUN yarn run:prod