# ---------------------------
# developステージ
# ---------------------------
FROM node:10-alpine as dev

# 開くポート
EXPOSE 3000

WORKDIR /app/frontend

# 依存パッケージの取得
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install

# ビルド
COPY . .
RUN yarn dev

# ---------------------------
# productionステージ
# ---------------------------
FROM node:10-alpine as prd

# 開くポート
EXPOSE 80

WORKDIR /app/frontend

# 依存パッケージの取得
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install

# ビルド
COPY . .
RUN yarn build
RUN yarn start
