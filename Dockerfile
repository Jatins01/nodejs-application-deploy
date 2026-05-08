#light weight image alpine
FROM node:22-alpine 

WORKDIR /app

# copy all package.json to current working directory(in container)
COPY package*.json ./  
RUN npm install

# after installing the dependancies copy all files into the container
COPY . .

EXPOSE 8080

CMD ["node", "index"]