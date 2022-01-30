FROM node

WORKDIR /src

COPY package.json .

COPY yarn.lock .

RUN npm install --global yarn

RUN yarn install

COPY . .

CMD ["npm", "run", "test"]