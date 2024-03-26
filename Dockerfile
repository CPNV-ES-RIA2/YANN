# STAGE : Development
FROM node:20-alpine as development
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 7070
CMD [ "npm", "run", "dev" ]

# STAGE : Production
FROM node:20-alpine AS production
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
CMD ["npm", "run", "build"]
COPY --from=development /app/dist /app/dist
EXPOSE 7070
CMD ["npm", "run", "start"]