FROM node:16-alpine
LABEL "name"="rent-website"
ENV PORT=19006
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
EXPOSE $PORT 19001 19002
ENTRYPOINT ["yarn", "run"]
CMD ["web"]