# Desafio Front-end PicPay

Primeiramente, obrigado pelo seu interesse em trabalhar na melhor plataforma de pagamentos do mundo!
Abaixo você encontrará todos as informações necessárias para iniciar o seu teste.

## Avisos antes de começar

- Primeiro crie uma branch a partir da `master` nesse padrão de nomenclatura: dd-mm-yy/nome-sobrenome (por exemplo, 30-04-20/meu-nome)
- Você poderá consultar o Google, Stackoverflow ou algum projeto particular na sua máquina.
- Fique à vontade para perguntar qualquer dúvida aos recrutadores.
- Fique tranquilo, respire, assim como você, também já passamos por essa etapa. Boa sorte! :)

## Setup do projeto

- Angular CLI: 8.3.18
- Node: 10.15.3
- Angular: 8.2.14

## Como Rodar?

- Instale as dependências usando o comando `npm install`
- Na raiz do repositório, rode este comando `ng serve` para iniciar o servidor de desenvolvimento.
- A Aplicação estará disponível na porta `http://localhost:4200/`

## Como submeter?

- Commite suas alterações de forma organizada
- Abra uma pull request da sua branch para a master com a nomenclatura: Nome Sobrenome - dd-mm-yy

## Objetivo

O objetivo é construir uma aplicação que simula o envio de dinheiro para uma outra pessoa, via cartão de crédito.

## Screenshots

### Lista de usuários

<img src="./screenshots/lista-usuarios.png" alt="Lista de usuários" style="width: 100%; max-width: 500px;">

### Modal de pagamento e listagem de cartões

<img src="./screenshots/modal-pagamento.png" alt="Modal de pagamento" style="width: 100%; max-width: 400px;">

### Modal de pagamento concluído com sucesso

<img src="./screenshots/modal-sucesso.png" alt="Modal de pagamento com sucesso" style="width: 100%; max-width: 400px;">

### Modal de erro no pagamento

<img src="./screenshots/modal-falha.png" alt="Modal de erro no pagamento" style="width: 100%; max-width: 400px;">

#

## Cartões para exibir

O cartão válido vai aprovar a transação no backend;

```javascript
let cards = [
  // valid card
  {
    card_number: '1111111111111111',
    cvv: 789,
    expiry_date: '01/18',
  },
  // invalid card
  {
    card_number: '4111111111111234',
    cvv: 123,
    expiry_date: '01/20',
  },
];
```

#

## Transação

### Endpoint: https://www.mocky.io/v2/5d542ec72f000048248614b3

### Método: POST

```typescript
// Payload:

interface TransactionPayload {
  // Card Info
  card_number: string;
  cvv: number;
  expiry_date: string;

  // Destination User ID
  destination_user_id: number;

  // Value of the Transaction
  value: number;
}
```

#

## Usuários

### Endpoint: https://www.mocky.io/v2/5d531c4f2e0000620081ddce

### Método: GET

```typescript
// Payload:

interface User {
  id: number;
  name: string;
  img: string;
  username: string;
}
```

#

## Diferenciais

- Teste unitário / E2E
- Melhoria no estilo da aplicação
- Validação de formulários e máscaras
- Organização do código

#

Mais uma vez, boa sorte! :green_heart:
