# React_Routing

Rangkuman dari materi React_Routing

## React_Routing

Pada react yang bersifat SPA(single page application) yang dimana 1 halaman yang menghandle semua aktivitas dalam app tersebut

React Router memiliki 4 jenis yaitu:

- BroweserRouter
  BrowserRouter digunakan sebagai router yang menggunakan API history dari HTML5, sehingga dapat menggunakan location untuk sinkronkan Ul dengan url.
- Switch
  Switch digunakan untuk membungkus kumpulan beberapa component Route
- Link
  Link digunakan untuk berpindah antar halaman, property to tersebut merujuk pada path di route yang akan dituju.
- Route
  Link digunakan untuk berpindah antar halaman, property to tersebut merujuk pada path di route yang akan dituju.

Contoh Implentasi dari react routing :

```
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-author" element={<AboutAuthor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
```

## URL Param React Route

Paramatel URL suatu parameter yang nilainya ditetapkan secara dinamis di URL halaman.
contoh :

```
<Route exact path="/movie/:id" component={UsersComponent} />
```

## Hook Routing React

- useHistory: memberi kita akses ke instance riwayatyang dapat digunakan untuk navigasi.
- useParams: mengembalikan object pasangan url
- useLocation: mengembalikan objek lokasi saat ini. Ini dapat berguna jika kita ingin melakukan - beberapa efek samping setiap kali lokasi saat ini berubah.
- useRouteMatch: mencoba mencocokkan URL saat ini
