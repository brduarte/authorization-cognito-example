# Auth Cognito Exemple

Esse projeto contempla apenas a parte de backend representada no diagrama abaixo. A integração foi feita utilizando a UI de login fornecida pelo Cognito mas você está livre para usar sua própria UI desde que ela envie para esse backend um token JWT gerado pelo Cognito.
 

![Untitled Diagram drawio (1)](https://user-images.githubusercontent.com/29002558/145313058-33aa98c5-4be8-47cb-8ebc-9a9948d127ab.png)

## ⚒️ Ferramentas Utilizadas 
  - Node.js v16.13.0
  - Express
  - amazon-cognito-identity-js
  - aws-jwt-verify

## 👨‍💻 Configurando o Projeto

Renomeie o arquivo .env.example para .env e preencha as variáveis com as credenciais de aplicativos do Cognito.

| Env | Descrição |
| --- | --- |
| AWS_COGNITO_REGION | Região de configuração do cognito. |
| AWS_COGNITO_USER_POOL_ID | ID do Pool de usuários. |
| AWS_COGNITO_ALLOW_CLIENTS | Lista de Clients ID's separados por vírgula. |


