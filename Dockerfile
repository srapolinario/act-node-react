FROM node:14-alpine

RUN apk add --no-cache bash

USER $user

WORKDIR /home/$user/app

USER root

COPY ./.docker/entrypoint.sh /home/$user/app/entrypoint.sh

RUN chmod +x /home/$user/app/entrypoint.sh

USER $user

ENTRYPOINT ["~/app/entrypoint.sh"]