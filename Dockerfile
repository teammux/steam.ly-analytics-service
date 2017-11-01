FROM node:boron

WORKDIR /server
COPY package.json .
RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
