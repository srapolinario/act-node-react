FROM node:14-alpine

RUN apk add --no-cache bash

USER node

WORKDIR /home/node/app

COPY ./.docker/docker-entrypoint.sh /docker-entrypoint.sh

RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]