FROM node:14-alpine

RUN apk add --no-cache bash

USER node

WORKDIR /home/node/app

USER root

COPY ./.docker/entrypoint.sh /home/node/app/entrypoint.sh

RUN chmod +x /home/node/app/entrypoint.sh

USER node

ENTRYPOINT ["/home/node/app/entrypoint.sh"]