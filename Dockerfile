# Use uma imagem base oficial do Node.js
FROM node:latest

# Defina o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Remova o package-lock.json e o diretório node_modules
RUN rm -rf package-lock.json node_modules

# Limpe o cache do npm
RUN npm cache clean --force

# Instale as dependências do projeto
RUN npm install --quiet --no-optional --no-fund --loglevel=error

# Reinstale o módulo @rollup/rollup-linux-x64-gnu
RUN npm install @rollup/rollup-linux-x64-gnu

# Copie o restante do código do projeto para o diretório de trabalho
COPY . .

# Execute o build do projeto
RUN npm run build

# Exponha a porta que a aplicação irá rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "run", "dev"]