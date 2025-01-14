FROM node:23-slim

WORKDIR /app

COPY . /app

RUN npm install

ENV REACT_APP_API_BASE_URL=http://todoApp:8000

EXPOSE 3000

CMD ["npm","start"]

