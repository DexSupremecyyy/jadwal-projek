# 📅 Jadwal Proyek (Project Management Web App)

Aplikasi web sederhana untuk manajemen jadwal dan status proyek. Projek ini dikembangkan sebagai **Tugas Akhir Praktik Kerja Lapangan (PKL)** untuk mendemonstrasikan implementasi CRUD dengan arsitektur REST API sederhana menggunakan PHP Native.

---

## 👥 Tim Pengembangan

Projek ini dikerjakan secara kolaboratif oleh:

* **Aidil** - *Frontend Engineer*
    * Merancang antarmuka pengguna (UI/UX) menggunakan HTML & CSS Modern.
    * Implementasi logika tampilan dengan JavaScript DOM Manipulation.
* **Ahmadi Jaka (Dex)** - *Backend Engineer*
    * Merancang Database MySQL.
    * Membangun REST API (JSON) menggunakan PHP Native.
    * Integrasi logika bisnis (Validasi status otomatis) & JavaScript Fetch API.

---

## 🔥 Fitur Unggulan

1.  **Manajemen Proyek (CRUD):** Tambah, Lihat, Edit, dan Hapus data proyek dengan mudah.
2.  **Smart Status Detection:** Backend secara otomatis mendeteksi proyek yang melewati tanggal deadline dan mengubah statusnya menjadi **"Telat"** (tanpa mengubah data database, hanya manipulasi output API).
3.  **Responsive UI:** Tampilan tabel dan form yang rapi dan responsif.
4.  **Arsitektur Terpisah:** Frontend (HTML/JS) dan Backend (PHP) terpisah secara logika, berkomunikasi via JSON.

---

## 🛠️ Teknologi yang Digunakan

* **Frontend:** HTML5, CSS3 (Custom Variables), Vanilla JavaScript (ES6).
* **Backend:** PHP Native (Versi 7.4 / 8.0+).
* **Database:** MySQL / MariaDB.
* **Tools:** Laragon / XAMPP, VS Code, Git.

---

## 🚀 Panduan Instalasi (Cara Menjalankan)

Ikuti langkah ini untuk menjalankan projek di komputer lain:

### 1. Persiapan Server Lokal
Pastikan komputer sudah terinstall **XAMPP** atau **Laragon** karena aplikasi ini butuh server PHP dan MySQL.

### 2. Clone / Download Repository
Simpan folder projek ini ke dalam folder server lokal:
* **XAMPP:** `C:\xampp\htdocs\jadwal-proyek`
* **Laragon:** `C:\laragon\www\jadwal-proyek`

### 3. Setup Database
1.  Buka **phpMyAdmin** (biasanya `http://localhost/phpmyadmin`).
2.  Buat database baru dengan nama: **`jadwal_proyek`**.
3.  Klik tab **SQL**, lalu copy-paste perintah berikut untuk membuat tabel:

```sql
CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    mulai DATE NOT NULL,
    selesai DATE NOT NULL,
    status ENUM('Berjalan', 'Selesai', 'Pending', 'Telat') DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 4. Konfigurasi Koneksi (Opsional)
Jika MySQL di komputer Anda menggunakan password (bawaan XAMPP/Laragon biasanya kosong), edit file api/db.php:

```PHP
$host = "localhost";
$user = "root";
$pass = ""; // <-- Isi password jika ada
$db   = "jadwal_proyek";
```

### 5. Jalankan Aplikasi
Buka browser dan akses alamat berikut: http://localhost/jadwal-proyek (Sesuaikan dengan nama folder).

📂 Struktur Folder

```Plaintext
jadwal-proyek/
├── api/             # Backend (PHP Native)
│   ├── db.php       # Koneksi Database
│   ├── create.php   # API Tambah Data
│   ├── read.php     # API Baca Data
│   ├── update.php   # API Edit Data
│   └── delete.php   # API Hapus Data
├── js/              # Logika Frontend
│   ├── index.js     # Fetch API untuk Tabel
│   └── manage.js    # Logic Form Tambah/Edit
├── index.html       # Halaman Utama (Tabel)
├── manage.html      # Halaman Form
├── style.css        # Styling Tampilan
└── bg.jpg           # Background Image
```