# Rocket Socket Chat

<p align="center">
  <img src="https://img.shields.io/static/v1?label=rocket&message=socket&color=blueviolet&style=for-the-badge"/>
  <img src="https://img.shields.io/github/license/MrRioja/rocketSocket?color=blueviolet&logo=License&style=for-the-badge"/>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/MrRioja/rocketSocket?color=blueviolet&logo=TypeScript&logoColor=white&style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/MrRioja/rocketSocket?color=blueviolet&style=for-the-badge">
</p>

<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#rocket-socket">Rocket Socket</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#autor">Autor</a>  
</p>

## Sobre

Projeto criado durante um curso de websocket ministrado no bootcamp Ignite de NodeJS da Rocketseat.

## Rocket Socket

O RocketSocket é um chat web construído com websocket e mongoDB.

A aplicação é bem simples e iremos passar por suas funcionalidades no decorrer desse tópico. Começamos pela página inicial, um simples formulário de login onde o usuário informará seu nome, email e uma URL para um foto que será utilizada em seu perfil:

![Tela de login](./.github/login.png)

Após o login o usuário é direcionado para a área principal da aplicação. Nessa tela ele poderá ver seu nome e foto no canto inferior esquerdo e no menu lateral esquerdo todo os usuário cadastrados até o momento, conforme exemplo a seguir:

![Homepage](./.github/home.png)

Ao receber uma mensagem, um badge vermelho ficara proximo a foto do usuário que enviou a mensagem, como mostrado abaixo:

![Nova mensagem recebida](./.github/new-message.png)

Para abrir o chat e visualizar uma conversa, basta clicar no usuário desejado que a conversa será exibida:

![Chat](./.github/chat.png)

Deixo abaixo uma demonstração do app em funcionamento para ilustrar como tudo funciona:

![Demonstração do app](./.github/demo.gif)

## Instalação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/). Além disso é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

> ⚠ É necessário ter o mongodb instalado na máquina e em execução. Também alterar a string de conexão no arquivo `http.ts`

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone git@github.com:MrRioja/rocketSocket.git

# Acesse a pasta do projeto no terminal/cmd
$ cd rocketSocket

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn dev

# O servidor iniciará na porta 3333 - acesse no browser <http://localhost:3333>
```

## Tecnologias

<img align="left" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="75" />

<img align="left" src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Express.js" height="75"/>

<img align="left" src="https://pandaprogrammer.com/wp-content/uploads/2021/11/watermark.png" alt="HTML e CSS logo" height="75" />

<br><br><br><br>

## Autor

<div align="center">
<img src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/55336456?v=4&h=100&w=100&fit=cover&mask=circle&maxage=7d" />
<h1>Luiz Rioja</h1>
<strong>Backend Developer</strong>
<br/>
<br/>

<a href="https://linkedin.com/in/luizrioja" target="_blank">
<img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>

<a href="https://github.com/mrrioja" target="_blank">
<img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>
</a>

<a href="mailto:lulyrioja@gmail.com?subject=Fala%20Dev" target="_blank">
<img alt="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
</a>

<a href="https://api.whatsapp.com/send?phone=5511933572652" target="_blank">
<img alt="WhatsApp" src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
</a>

<a href="https://join.skype.com/invite/tvBbOq03j5Uu" target="_blank">
<img alt="Skype" src="https://img.shields.io/badge/SKYPE-%2300AFF0.svg?style=for-the-badge&logo=Skype&logoColor=white"/>
</a>

<br/>
<br/>
</div>
