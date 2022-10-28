# Mutation_GraphQL

Rangkuman dari materi Mutation_GraphQL

## Mutation_GraphQL

Mutation_GraphQL teknik untuk menulis kembali data ke server, Seperti Create, Update, dan Delete. Melakukan refatching dengan hook refatchquries yang diberikan

## Contoh dari mutation pada graphql

create :

```
 mutation addPass($objects: [users_insert_input!]!) {
    insert_users(objects: $objects) {
      returning {
        id
        jenisKelamin
        nama
        umur
      }
    }
  }
```

delete

```
  mutation DeletePass($id: Int!) {
    delete_users_by_pk(id: $id) {
      id
      nama
      umur
    }
  }
```
