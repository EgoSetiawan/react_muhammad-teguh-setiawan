# React_Fundamental

Rangkuman dari materi React_Fundamental

## JSX

JSX adalah singkatan dari Javascript XML yang merupakan ekstensi syntax pada Javascript yang dalam penggunaannya lebih disarankan di React karena lebih menggambarkan apa yang seharusnya tampak pada UI. Contoh dari JSX:

```
const element = <h1>Hello, world!</h1>;
```

### Penggunaan JSX

JSX dibuat berdasarkan fakta bahwa logika rendering sangat terikat dengan logika UI. Dengan menggunakan React dapat menggabungkan teknologi (separation of technology) dan memisahkan sesuai dengan kepentingannya (separation of concerns) dengan unit yang paling rendah atau komponen. Dengan menggunakan JSX dapat menggabungkan HTML, CSS, dan JS dalam satu file.

## Component

React component adalah bagian kode yang dapat digunakan kembali untuk menentukan tampilan, behavior, dan state dari sebagian UI. Komponen ini dapat mempermudah untuk memecah UI menjadi bagian tersendiri, dimana bagian tersebut dapat digunakan kembali dan untuk setiap potongan komponen itu dalam sebuah isolasi. Dalam komponen dapat menerima props, lalu di dalamnya terdapat state atau data yang di isolasi pada komponen tersebut dan dari komponen nanti akan di render menjadi DOM.

### Component pada React dapat dibagi menjadi 2 yaitu Class dan Funtion

- Class Component
  Dimana membuat class dengan mengextends class component pada react dengan contoh

```
class Welcome extends React.Component {
  render() {
    return <h1>Halo, {this.props.name}</h1>;
  }
}
```

- Function Component
  Dimana pada function mendeklarasikan function dan dapat digunakan sebagai component dengan contoh

```
const Halo = (- props -) => {
    return (
        <> //merupakan react fragment
            <h1>Ini Function Component</h1>
        </>//merupakan react fragment
    )
}
```

## Props

Props adalah argumen yang diteruskan ke komponen React. Props diteruskan ke komponen melalui atribut HTML. Yang bisa dikirim dalam props bisa berupa data, variables, state function dan bahkan sebuah kelas.

## React LifeCycle

React lifecycle hanya dimiliki oleh class component sedangkan pada function disebut hook

- render()
- componentDidMount() Dipanggil saat merender pertama kali
- componentDidUpdate() Dipanggil saat ada perubahan
- componentWillUnmount() Dipanggil saat component selesai/dihancurkan

## Conditional

Render Bersyarat Pada React, kita dapat membuat komponen berbeda yang mencakup perilaku yang dibutuhkan. Lalu, kita dapat merender beberapa bagian yang ingin ditampilkan, sesuai state yang dibutuhkan

1. Menggunakan IF dan Else
2. Menggunakan ternary condition
3. Menggunakan IF else pada react dengan import

## Directory Structure

React tidak memiliki pendapat tentang bagaimana cara memasukkan file ke folder. Berikut saran dalam menentukan directory structure:

- Pengelompokan berdasarkan fitur atau rute
- Pengelompokan berdasarkan jenis file
- Hindari terlalu banyak nesting

## Styling Inline

Pada react dapat melakukan styling dengan:

1. Classes dan CSS
2. Atribut Style
3. Modul CSS
