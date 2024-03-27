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
FROM nginx:alpine as production
COPY nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=development /app/dist /usr/share/nginx/html
EXPOSE 7070
CMD ["nginx", "-g", "daemon off;"]