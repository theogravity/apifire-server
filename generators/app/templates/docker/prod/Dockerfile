FROM mhart/alpine-node:12 as build-setup

# Create app directory
WORKDIR /app-tmp

COPY src src/
COPY tsconfig.json .
COPY package.json .

RUN yarn
RUN yarn build

FROM mhart/alpine-node:12 as prod-build

WORKDIR /app

COPY --from=build-setup /app-tmp/build ./build
COPY --from=build-setup /app-tmp/src/config/config.yaml ./build/config/config.yaml

COPY --from=build-setup /app-tmp/package.json ./
COPY --from=build-setup /app-tmp/yarn.lock ./

RUN yarn install --production=true

EXPOSE 3000

CMD yarn start
