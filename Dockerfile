FROM node:18
# Create app directory
WORKDIR /app

EXPOSE 19065

# Copy config and built files
COPY package.json /app
COPY . .
RUN ls
#COPY .env.* /app
# Install app dependencies
RUN apt update --allow-insecure-repositories
RUN apt install tree -y
#RUN npm cache --force clean
#RUN npm install --force node-sass
RUN yarn cache clean --force
RUN yarn install
RUN yarn global add serve
RUN ls
RUN yarn build
RUN ls
RUN pwd
RUN rm -rf build/static/js/*.map
RUN ls -la
RUN tree -a build
RUN ls build/static/js