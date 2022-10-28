# Global State Management and Data Fetching

Rangkuman dari materi Global State Management and Data Fetching

## Global State Management and Data Fetching

Pada react memiliki global state yang mana diganukaan untuk melakukan integrasi dengan backend dengan menyimpan perubahan pada dengan melakukan re-render component tertentu dan mengconsume api dari apu

### Redux

Redux adalah library yang membantu kita dalam menangani state global

Kapan saat yang tepat untuk menggunakan Redux

1. Banyak state yang perlu ditaruh di banyak tempat
2. State pada app sering berubah
3. Logic untuk mengubah state kompleks
4. Ukuran codebase yang sedang-besar, dan dikerjakan oleh banyak orang
5. Perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu

Komponen pada Redux :

1. Actions = Digunakan untuk memberi informasi dari aplikasi menuju store
2. Reduce = Functions yang mengambil state aplikasi dan object action lalu mengembalikan state aplikasi terbaru
3. Store = Objek sentral yang menyimpan state pada aplikasi

### Persisted State

Persisted state digunakan untuk menghandle side effect logic seperti logic synchronous kompleks yang perlu mengakses store dan juga logic async seperti request data

contoh implement yang digunakan:

```
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducer from "./features/todoReducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistReducers = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);`
```

dan pemberian persista gate

```
<Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouteSetup />
        </PersistGate>
      </Provider>
```

### Data Fetching

Dalam melakukan data fetching bisa menggunakan axios dan fetch functions yang disediakan react akan tetapi haru mengubah ke string dengan `JSON.stringify()`
dalam melakukan fetching terdapat https request contoh:

1. GET
2. POST
3. DELETE
4. POST
5. PUT
