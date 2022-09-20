# Event_Handling

Rangkuman dari materi Event_Handling

## Event_Handling

Event Handling merupakan suatu metode untuk menangani sebuah event yang diberikan pada suatu komponen. Event adalah peristiwa yang terjadi ketika user berinteraksi dengan komponen. Contoh event adalah clipboard, form, mouse, dan generic.

### State

State adalah data private pada sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak bisa diakses dari component lainnya.

### Props

Props adalah argumen yang diteruskan ke komponen React. Props diteruskan ke komponen melalui atribut HTML. Kemudian apa yang bisa di passing atau dikirim dalam props? Yang bisa dikirim dalam props bisa berupa data, variables, state function dan bahkan sebuah kelas.

### Perbedaan props dan state

| Props                            | State                                  |
| -------------------------------- | -------------------------------------- |
| Props datanya bersifat read-only | State datanya dengan cara asynchronous |
| Props data immutable             | State data mutable                     |

## Statefull and Stateless

### Stateful Component

Stateful component atau yang disebut juga Smart Component dan Container Component adalah komponen React yang memiliki state. Component ini dibuat dengan class. Kelebihan dari class component adalah memiliki lifecycle dan dynamic bagi website

### Stateless Component

Stateless Component atau yang disebut juga Dump Component dan Presentational Component adalah komponen React yang tidak memiliki state, hanya prop. Umumnya component ini dibuat dengan function karena codenya lebih ringkas atau bisa dikatakan sebagai reprentasive component

## Handling Event

Suatu mode untuk menangani event atau aksi yang diberikana pada suatu komponen
contoh Handling Event:

1. Clipboard Events
2. Form Events
3. Mouse Events
4. Generic Events
