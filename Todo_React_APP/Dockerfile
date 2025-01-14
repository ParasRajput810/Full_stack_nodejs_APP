FROM node:23-slim

WORKDIR /app

COPY . /app

RUN npm install

ENV REACT_APP_API_BASE_URL=http://localhost:8000/api/v1

EXPOSE 3000

CMD ["npm","start"]

