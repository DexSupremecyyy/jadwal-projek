# 📅 Project Schedule Management (Jadwal Proyek)

A simple web application designed for managing project schedules and statuses. This project was developed as a **Final Project (PKL)** to demonstrate implementing CRUD functionality using a basic REST API architecture built with PHP Native.

---

## 🧑‍💻 Team

The project was developed collaboratively by:

* **Aidil** - *Frontend Engineer*
    * Designed the User Interface (UI/UX) using modern HTML & CSS.
    * Implemented display logic using JavaScript DOM Manipulation.
* **Ahmadi Jaka (Dex)** - *Backend Engineer*
    * Designed the MySQL Database structure.
    * Built the REST API (JSON) using PHP Native.
    * Integrated business logic (Automatic Status Validation) and JavaScript Fetch API.

---

## ✨ Key Features

1.  **Full CRUD Project Management:** Easily Add, View, Edit, and Delete project data.
2.  **Smart Status Detection:** The backend automatically checks if a project has passed its deadline, updating its status to **"Telat"** (Late) in the API output, without modifying the database.
3.  **Responsive UI:** Clean and responsive design for tables and forms.
4.  **Decoupled Architecture:** Clear separation of Frontend (HTML/JS) and Backend (PHP) communicating exclusively via JSON.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3 (Custom Variables), Vanilla JavaScript (ES6).
* **Backend:** PHP Native (Version 7.4 / 8.0+).
* **Database:** MySQL / MariaDB.
* **Tools:** Laragon / XAMPP, VS Code, Git.

---

## 🚀 Installation Guide (How to Run)

Follow these steps to run the project locally:

### 1. Server Preparation
Ensure you have **XAMPP** or **Laragon** installed, as the application requires a PHP and MySQL server environment.

### 2. Clone / Download Repository
Place the project folder in your local server directory:
* **XAMPP:** `C:\xampp\htdocs\jadwal-proyek`
* **Laragon:** `C:\laragon\www\jadwal-proyek`

### 3. Database Setup
1.  Open **phpMyAdmin** (usually `http://localhost/phpmyadmin`).
2.  Create a new database named: **`jadwal_proyek`**.
3.  Navigate to the **SQL** tab and copy-paste the following query to create the table:

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

### 4. Connection Configuration (Optional)
If your MySQL requires a password, modify the file `api/db.php`:

```PHP
$host = "localhost";
$user = "root";
$pass = ""; // <-- Update with your password if needed
$db   = "jadwal_proyek";
```

### 5. Run Application
Open your browser and access the following address: `http://localhost/jadwal-proyek` (Adjust the path if you named the folder differently).

---

## 📂 Project Structure

```Plaintext
jadwal-proyek/
├── api/             # Backend (PHP Native)
│   ├── db.php       # Database Connection
│   ├── create.php   # Create (Add Data)
│   ├── read.php     # Read (View Data)
│   ├── update.php   # Update (Edit Data)
│   └── delete.php   # Delete (Delete Data)
├── js/              # Frontend Logic
│   ├── index.js     # Logic for Table View (Fetch API)
│   └── manage.js    # Logic for Form (Add/Edit)
├── index.html       # Main Page (Project List)
├── manage.html      # Form Page (Add/Edit Project)
├── style.css        # Styling
└── bg.jpg           # Background Image
```