# Use uma imagem base oficial do Node.js
FROM node:18

# Defina o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Copie o restante do código do projeto para o diretório de trabalho
COPY . .

# Instale as dependências do projeto
RUN npm install --quiet --no-optional --no-fund --lolevel=error

RUN npm run build


# Exponha a porta que a aplicação irá rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "run", "start"]