ARG PORT=8080
FROM node:16.14.2
ENV NODE_ENV=production
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . . 
RUN npm run build
EXPOSE ${PORT}
CMD ["npm","run","deploy"]