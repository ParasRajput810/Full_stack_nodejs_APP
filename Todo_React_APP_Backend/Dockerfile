FROM node:23-slim



WORKDIR /app

COPY . /app

RUN npm install

ENV DB_USERNAME=root
ENV DB_PASSWORD=Paras@8101999
ENV DB_DATABASE=TodoDB
ENV DB_HOST=mysql
ENV NODE_ENV=development
ENV PORT=8000

EXPOSE 8000

CMD npm run db:create && npm run db:migrate && npm start
