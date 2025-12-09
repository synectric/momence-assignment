FROM docker.io/node:lts-alpine AS build

ENV HOST=0.0.0.0
ENV PORT=4444

WORKDIR /app

COPY apps/app/dist ./
COPY apps/app/nginx.conf ../nginx/

RUN yarn install --frozen-lockfile

FROM nginx:stable-alpine

COPY --from=build /app /usr/share/nginx/html
COPY --from=build /nginx/nginx.conf /etc/nginx/conf.d/default.conf
