# base/parent image
FROM node:12.13.0

# adding GraphQL directory to make absolute filepaths consistent across services
WORKDIR /app/graphql

# add `/app/graphql/node_modules/.bin` to $PATH
ENV PATH /app/graphql/node_modules/.bin:$PATH

# install and cache app dependencies
COPY . /app/graphql/
RUN npm install --silent

EXPOSE 1337

# start app
CMD ["npm", "start"]