# Subscriptions_GraphQL

Rangkuman dari materi Subscriptions_GraphQL

## Subscriptions_GraphQL

Subscription memiliki metode streaming. Client mengirim request untuk melakukan langganan ke aliran data. Subscription menggunakan websocket sebagai penghubung tidak menggunakan http request, subscription melakukan refecth terus menerus

## Contoh dari mutation pada graphql

```
 subscription getPassangerSubsctription {
    users {
      id
      nama
      umur
      jenisKelamin
    }
  }

```

Test
