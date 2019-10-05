# ---------------------------
# developステージ
# ---------------------------
FROM node:12-alpine as dev
WORKDIR /usr/src/app
EXPOSE 3000

# ---------------------------
# productionステージ
# ---------------------------
FROM node:12-alpine as prd
WORKDIR /usr/src/app
EXPOSE 80
