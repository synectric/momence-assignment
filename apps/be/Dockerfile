FROM docker.io/node:lts-alpine AS builder

LABEL author=synectric

ENV HOST=0.0.0.0
ENV PORT=8080

EXPOSE $PORT

WORKDIR /app

COPY dist/apps/be package.json yarn.lock ./

RUN yarn install --frozen-lockfile --production

FROM docker.io/node:lts-alpine

WORKDIR /app

COPY --from=builder /app .

CMD [ "node", "main.js" ]
