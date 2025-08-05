# ⚙️ Node.js Todolist RESTful API

Ini adalah proyek latihan pertama saya dalam membangun RESTful API sederhana menggunakan Node.js. Proyek ini saya kerjakan sebagai bagian dari pembelajaran melalui course **"NodeJS dari Dasar hingga Mahir"** oleh **Programmer Zaman Now**.

---

## 📚 Apa yang Saya Pelajari?

Dalam proyek ini, saya mempraktikkan dan memperdalam pemahaman tentang:

* ✅ Membuat dokumentasi API menggunakan **OpenAPI** & **Swagger**
* ✅ Membangun HTTP Server dengan **Node.js**
* ✅ Mengembangkan layanan RESTful API dengan method **GET**, **POST**, **PUT**, dan **DELETE**

---

## 🛠️ Tools yang Digunakan

Saya menggunakan beberapa tools untuk menunjang pengembangan proyek ini:

* **Terminal** – sebagai media utama eksekusi perintah
* **Neovim + LazyVim** – code editor favorit yang saya gunakan
* **Tmux** – untuk manajemen terminal yang lebih efisien
* **[Posting](https://posting.sh/)** – API client berbasis terminal untuk pengujian endpoint
* **[Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express/v/4.6.2)** – untuk menampilkan dokumentasi API secara interaktif

---

## 🚀 Cara Menjalankan Proyek

1. Clone repository ini:

   ```bash
   git clone https://github.com/afrandormd/nodejs-todolist-restful-api
   ```

2. Masuk ke direktori proyek:

   ```bash
   cd nodejs-todolist-restful-api
   ```

3. Install semua dependencies:

   ```bash
   npm install
   ```

4. Jalankan server:

   * Untuk menjalankan **API Documentation**:

     ```bash
     node index.js

     # atau jika menggunakan nodemon
     nodemon index.js
     ```

     Akses dokumentasi API di: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

   * Untuk menjalankan **RESTful API Service**:

     ```bash
     node app.mjs

     # atau jika menggunakan nodemon
     nodemon app.mjs
     ```

     Endpoint API dapat diakses di: [http://localhost:3001/api/v1/todolist](http://localhost:3001/api/v1/todolist)

---

## 🙌 Penutup

Proyek ini menjadi langkah awal saya dalam memahami dunia backend development menggunakan Node.js. Silakan eksplorasi, uji, dan kalau ada masukan atau saran, feel free untuk buat issue atau pull request. Terima kasih telah mampir! 🚀

---

