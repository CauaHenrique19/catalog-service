FROM node:22-alpine AS build
WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig.json ./
COPY tsconfig.build.json ./
COPY nest-cli.json ./
COPY src ./src

RUN npm install
RUN npm run build

FROM node:22-alpine
WORKDIR /usr/src/app

COPY --from=build /usr/src/app/dist ./dist

CMD ["node", "main/main.js"]