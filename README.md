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

```
yarn install
```

```
yarn dev
```

