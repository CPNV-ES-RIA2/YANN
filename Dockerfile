# STAGE : Development
FROM node:20-alpine as development
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "npm", "run", "dev" ]

# STAGE : Production
 FROM node:21-alpine AS production
 WORKDIR /app
 COPY package*.json ./
 RUN npm install
 COPY . .
 RUN npm run build
 EXPOSE 8080
 CMD ["npm", "run", "preview"]