// js/manage.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Cek URL: Kita lagi mode "Tambah" atau "Edit"?
    // (Cara baca URL: manage.html?id=5)
    const urlParams = new URLSearchParams(window.location.search);
    const idProyek = urlParams.get('id'); // Kalau ada isinya berarti EDIT

    // --- BAGIAN EDIT: ISI FORM OTOMATIS ---
    if (idProyek) {
        document.querySelector('.btn-submit').textContent = 'Update Data';
        document.querySelector('h2').textContent = 'Edit Proyek';

        // Ambil data dari API Read (semua) terus cari yang ID-nya cocok
        // (Cara simple biar gak perlu bikin file api/read_single.php)
        fetch('api/read.php')
            .then(response => response.json())
            .then(data => {
                // Cari data yang ID-nya sama dengan URL
                const project = data.find(item => item.id == idProyek);
                
                if (project) {
                    document.getElementById('nama').value = project.nama;
                    document.getElementById('mulai').value = project.mulai;
                    document.getElementById('selesai').value = project.selesai;
                    document.getElementById('status').value = project.status;
                }
            });
    }

    // --- BAGIAN SUBMIT FORM (CREATE & UPDATE) ---
    window.submitForm = function(e) {
        e.preventDefault(); // Jangan refresh halaman

        // Siapin data JSON
        const newData = {
            nama: document.getElementById('nama').value,
            mulai: document.getElementById('mulai').value,
            selesai: document.getElementById('selesai').value,
            status: document.getElementById('status').value
        };

        let urlApi = 'api/create.php'; // Default: Tambah Baru
        
        // Kalau Mode Edit, kita tambah ID ke data & ganti URL API
        if (idProyek) {
            urlApi = 'api/update.php';
            newData.id = idProyek; // Masukin ID biar PHP tau mana yg diedit
        }

        // Kirim ke Backend
        fetch(urlApi, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
        .then(response => response.json())
        .then(result => {
            alert(result.message); // Tampilkan pesan sukses/gagal
            window.location.href = 'index.html'; // Balik ke halaman utama
        })
        .catch(error => console.error('Error:', error));
    };
});