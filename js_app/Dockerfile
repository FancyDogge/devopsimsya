FROM node:24-slim

ENV NODE_ENV=production \
    PORT=3000

WORKDIR /app

# как и с питончиком сначала только зависимости (кэш слоев)
# тут был прикол с правами, тк мы переключаемся потом на пользователя node, а не остаемся рутом
# нужно скопировать зависимости и сразу отдать права юзеру node
COPY --chown=node:node package*.json ./

RUN npm ci --only=production --ignore-scripts

# тоже был прикол с правами, аналогично
COPY --chown=node:node ./src ./src

# переключаемся на встроенного пользователя без рута
USER node

# пуск
CMD ["node", "./src/main.js"]