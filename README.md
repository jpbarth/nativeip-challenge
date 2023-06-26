# Desafio NativeIP

## Sobre o Docker

Para iniciar o projeto, basta executar o seguinte comando:

```sh
docker compose up -d
```

Serão executados 3 containers, sendo eles:

- Database: exposto na porta 3031
- Backend: exposto na porta 3030
- Frontend: exposto na porta 3032

## Serviço Backend

Com o serviço no rodando, é possível acessar a documentação da API em [clicando aqui](http://localhost:3030/api-docs).

Caso queira testar a API utilizando o próprio swagger, ou outro software de sua preferência, é necessário autenticar usando um JWT, como não foram implementadas rotas de autenticação, basta gerá-lo utilizando algum serviço externo, ou copiar o token abaixo:

```
eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MTk0MDE2MjAsInVzZXIiOiJUZXN0IFVzZXIiLCJpYXQiOjE2ODc3NzkyMjAsImVtYWlsIjoidXNlckB0ZXN0LmNvbSJ9.hRJlfFl_6X2uwVLUFADQl2pvRTHfd74vMjIop2Av0GI
```

## Serviço Frontend

Há duas páginas que podem ser acessadas. A página "Dashboard", possui um select para escolher a cidade desejada, após a seleção será rendereizada uma lista paginada com os clientes da cidade. E a página "Edit Customer", onde é possível visualizar e editar todos os dados do cliente selecionado.

Além das chamadas de API com o Axios, o Frontend também está ouvindo eventos emitidos pelo Backend através de um Web Socket, fazendo com que a contagem de clientes no select e as informações dos clientes na lista sejam atualizads de forma automática, sem a necessidade de recarregar a página. Esta funcionalidade não está presenta na página de edição, afim de evitar perda de conteúdo.

## Considerações finais

Agradeço a oportunidade e o desafio proposto por vocês, foi uma excelente oportunidade para testar e aprimorar meus conhecimentos. Espero poder integrar sua equipe!