// js/index.js (Versi API / Backend)

const tableBody = document.getElementById("table-body");

function loadTable() {
    // 1. Minta data ke (API Read)
    fetch('api/read.php')
        .then(response => {
            // Cek apakah response sukses (OK)
            if (!response.ok) {
                throw new Error('Gagal ambil data dari server');
            }
            return response.json();
        })
        .then(data => {
            console.log("Data dari API:", data);
            
            tableBody.innerHTML = ""; // Bersihin tabel dulu

            // 2. Cek kalau data kosong
            if (data.length === 0) {
                tableBody.innerHTML = "<tr><td colspan='6'>Belum ada proyek.</td></tr>";
                return;
            }

            // 3. Looping data dari Database MySQL
            data.forEach((item, index) => {
                tableBody.innerHTML += `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${item.nama}</td>
                        <td>${item.mulai}</td>
                        <td>${item.selesai}</td>
                        <td>${item.status}</td>
                        <td>
                            <button class="action-btn edit" onclick="edit(${item.id})">Edit</button>
                            <button class="action-btn delete" onclick="hapus(${item.id})">Hapus</button>
                        </td>
                    </tr>
                `;
            });
        })
        .catch(error => {
            console.error('Error:', error);
            tableBody.innerHTML = "<tr><td colspan='6' style='color:red'>Gagal konek ke API Backend! Cek Console.</td></tr>";
        });
}

// Panggil fungsi pas halaman dibuka
loadTable();

function edit(id) {
    window.location.href = `manage.html?id=${id}`;
}

function hapus(id) {
    if (confirm("Yakin mau hapus proyek ini?")) {
        fetch(`api/delete.php?id=${id}`)
            .then(response => response.json())
            .then(result => {
                alert(result.message);
                loadTable(); // Refresh tabel
            })
            .catch(error => console.error('Error:', error));
    }
}