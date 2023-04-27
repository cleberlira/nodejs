# INTRODUÇÃO AO DESENVOLVIMENTO WEB COM NODE.JS

## Sobre o curso
```

Objetivos: Abordar as principais funcionalidades do Node.js e como utilizá-las para desenvolver aplicações web modernas. 
Professores: Prof. Dr. Cleber Lira e Prof. Dr. Thiago Mendes
Datas:   28 de abril, 05, 12, 19 de maio de 2023 das 14h às 16h.
Carga horária: 8 horas
Local: Online | Microsoft Teams

```


## Instalação do Node.js

Para instalar o Node.js no Ubuntu

Utilizar a versão versão LTS (Long-term support, ou suporte de longo prazo, em português) 


```sh
1. curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
```


```
2. sudo apt-get install -y nodejs

```
Verificar a versão do Node.js instalado
```
node --version
```
Verificar a verão do npm

```
npm --version
```

## Minha primeira aplicação

Crie um diretório para iniciar o seu projeto. Em seguida digite:

```sh
npm init

```
Visão de um arquivo package.json

```
{
  "name": "projeto",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
}

```
Instalar uma dependência

```
npm install express
```

Meu primeiro código

```

const express = require('express');
const app = express();

app.get('/', async(req, res) => {
   res.send("Página inicial do projeto Payroll - Inovar para Pessoas Negras");
});

app.listen(8080, () => {
   console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});

```

Execute o projeto

```
node app.js
```

Acesse em seu navegador
```
http://localhost:8080/
```

## Uso do nodemon

Reiniciar o servidor quando ocorrer mudança no código

```sh
sudo npm install -g nodemon
```
```
npm install –save-dev nodemon

```

Para rodar com suporte ao nodemon


```
nodemon app.js

```



## Suporte e desenvolvimento

<p align="center">
	Desenvolvido por Cleber Lira e Tiago Mendes </br>
  
</p>
