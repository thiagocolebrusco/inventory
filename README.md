<h1 align="center">
Inventário
</h1>
<h3 align="center">
    Aplicativo  para controlar produtos e categorias.
</h3>
<h4 align="center">
	Status:   Concluído 🚀 
</h4>

## ⚙️ Funcionalidades

- [x] CRUD de Categorias e Produtos no aplicativo móvel
  - [x] Cadastro
  - [x] Edição
  - [x] Remoção
  - [x] Listagem
 

## 🛠 Tecnologias
As seguintes ferramentas foram usadas na construção do projeto:
#### **Server**  [NodeJS](https://nodejs.org/en/) :
-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[KnexJS](http://knexjs.org/)**
-   **[SQLite](https://github.com/mapbox/node-sqlite3)**
#### **Mobile**  [React Native](http://www.reactnative.com/) :
-   **[React Navigation](https://reactnavigation.org/)**
-   **[Axios](https://github.com/axios/axios)**
-   **[Picker](https://github.com/react-native-community/react-native-picker)**

## 🚀 Como executar o projeto
Este projeto é divido em duas partes:
1. Backend (pasta backend) 
2. Mobile (pasta mobile)

💡 O Mobile precisa que o Backend esteja sendo executado para funcionar.

### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
#### 🎲 Executando o backend (servidor)
```bash

# Clone este repositório
$ git clone https://github.com/alisson-moura/inventory.git

# Acesse a pasta do projeto no terminal/cmd
$ cd inventory

# Vá para a pasta server
$ cd backend

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run start:dev

# A API vai ficar disponível  na porta:5000 
````
#### 🎲 Executando o aplicativo (mobile)
Para executar o aplicativo é necessário ter o ambiente de desenvolvimento configurado, para consultar a documentação basta acessar: [Development Enviroment](https://reactnative.dev/docs/environment-setup).<br/>
Depois de configurar o ambiente de desenvolvimento bastar seguir esses passos:
<br/>
<b>Observação:<b> Alterar no arquivo .env.json o valor da propriedade "API_URL" para o endereço que o backend está sendo executado.
```bash
# Acesse a pasta do projeto no terminal/cmd
$ cd inventory

# Vá para a pasta mobile
$ cd mobile

# Instale as dependências
$ npm install

# Execute a aplicativo em modo de desenvolvimento
$ npx react-native run-android
```
## 🦸 Autor

 <img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/48321754?s=460&u=9faab799c661b3f1227c25e0233a2f30b699218a&v=4" width="100px;" alt=""/><br />
<b>Alisson Moura </b>
 
## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito por Alisson Moura 👋🏽 [Entre em contato!](https://www.linkedin.com/in/alisson-mo-moura/)
