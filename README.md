# Auth Cognito Exemple

Esse projeto contempla apenas a parte de backend representada no diagrama abaixo. A integração foi feita utilizando a UI de login fornecida pelo Cognito mas você está livre para usar sua própria UI desde que ela envie para esse backend um token JWT gerado pelo Cognito.
 

![Untitled Diagram drawio (1)](https://user-images.githubusercontent.com/29002558/145313058-33aa98c5-4be8-47cb-8ebc-9a9948d127ab.png)

## ⚒️ Ferramentas Utilizadas 
  - Node.js v16.13.0
  - Express
  - Cognito

## 👨‍💻 Configurações do Projeto

Renomeie o arquivo `.env.example` para `.env` e preencha as variáveis com as credenciais de aplicativos do Cognito.

```sh
$ cp .env.example .env
```

Atributos do arquivo `.env`

| Env | Descrição |
| --- | --- |
| AWS_COGNITO_REGION | Região de configuração do cognito. |
| AWS_COGNITO_USER_POOL_ID | ID do Pool de usuários. |
| AWS_COGNITO_ALLOW_CLIENTS | Chave do cliente aplicativo para validar se origem do login pode ter acesso a API. |

No Cognito cada User Pool permite a configuração de várias chaves de cliente aplicativos, se esse for o seu caso, você pode lista-las na variavel `AWS_COGNITO_ALLOW_CLIENTS` separando-as por virgula:

**Ex:**
```.env
AWS_COGNITO_ALLOW_CLIENTS=client-id-1,client-id-2,client-id-3
```

## 👨‍💻 Executando

Depois que você configurar o `environment(.env)` do projeto basta você executar os seguintes comandos.

```sh
// Instalando dependências
$ yarn install
```

```sh
// Executando o projeto
$ yarn start
```

## Requisição de Exemplo

```curl

curl --location --request GET 'http://localhost:3001/me' \
--header 'marketplaceId: 5' \
--header 'Authorization: eyJraWQiOiJjeDQ1aW1XczAxYnV4b0hqVjd2XC9YeGRhOVBUWkdYRld0S1dVUVFcL2t4Z0E9IiwiYWxnIjoiUlMyNTYifQ.eyJhdF9oYXNoIjoiMmhZWGRLVlhwVHZsLVd1TWVPWS1GZyIsInN1YiI6IjgyZTA0ZDgzLTc4ZGMtNDczOS04MmY2LTlkMGRmODlmMTQxMiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV95RnE2RTlwc3giLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiODJlMDRkODMtNzhkYy00NzM5LTgyZjYtOWQwZGY4OWYxNDEyIiwiYXVkIjoiM2hwN2QydDQ5cWh0ajJjZ2o0NzRlb2RoNmsiLCJldmVudF9pZCI6IjAwMGQwZGM0LTcwNDgtNGUxMC1iYjEwLTJkMTNjODQ1MTVmNCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjM5MDEzODMyLCJwaG9uZV9udW1iZXIiOiIrNTUzNzk5MTE1OTYxMSIsImV4cCI6MTYzOTAxNzQzMiwiaWF0IjoxNjM5MDEzODMyLCJqdGkiOiIzNzA5NjRlZi0xMzQ4LTRmNzItOTU2OS1mZTM0MWEyMzI1NjEiLCJlbWFpbCI6ImJydW5vbWFjaWVsZHVhcnRlMzJAZ21haWwuY29tIn0.Horxr78G4Q1nwDAYPjti7AFtQPKQdOvePlFPsSKVmiPa377mK5gFEoGC0zBCRJtAUnjtScgtA6nxVBJ6fk3MqYGbv-oL4cz1CG2aliSLpaje99yW27zAQ_QVfjqyQbnz5gsuqG7IzMFG_pohHcBqukiA0T7-kdqLSWzR-zA_TqlFE1_LSWi3JnIsVUI_LpEBa-LQKXbgLbp1RT3ajCgCNlrt8KVhVAx4SXHXa9dTw9fSlsacmCH4H9tz8vZ9oDTkIN2A2wgr73Qpr6N87gldMWeB3WFBo7axjPRL-PpGS2ljF6ytqx5PtpY2yHHBl57SzzRQ4safMD3h00ZK4T-JOQ'

```

