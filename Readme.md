#  Desafio Software Engineer, Back-end - Pagar.me

Para executar o projeto, basta executar os seguintes comandos:

    npm install

    npm run start

O projeto será iniciado na porta 3000 por padrão.

Um usuário (customer) já foi criado e possui Id: 1



##

**Criando uma transação**

é feita atraves de uma requisição **POST**  nessa rota:

    POST localhost:3000/transaction/

o contrato a ser seguido:

    {
	"id_customer": 1,
	"payment_method": "debit_card",
	"description": "Compra no Débito",
	"amount": 80,
	"cvv": 511,
	"card_number": 23876234324,
	"owner_name": "Luiz Silva",
	"valid_thru": "2028-01"
	}

**Listando transações por cliente**

    GET localhost:3000/transaction/:customerId
Lembrando que um cliente já foi criado e tem o Id 1

**Listando payables por cliente**

    GET localhost:3000/payables/:customerId
**Listando payables(status: paid) por cliente**

    GET localhost:3000/payables/available/:customerId

**Listando payables(status: waiting_funds) por cliente**

    GET localhost:3000/payables/waiting-funds/:customerId
