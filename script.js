// Fungsi untuk menampilkan pesan alert ketika tombol diklik
function showAlert(budaya) {
    alert('Anda sedang melihat informasi lebih detail tentang ' + budaya + '.');
}

// Menangani DOMContentLoaded untuk memastikan elemen HTML sudah dimuat
document.addEventListener('DOMContentLoaded', function() {
    // 1. Mengubah teks secara dinamis di footer
    const pengelolaSpan = document.getElementById('nama-pengelola');
    if (pengelolaSpan) {
        pengelolaSpan.textContent = 'Tim Pengembang Budaya';
    }

    // 2. Menambahkan interaktivitas (toggle) untuk menampilkan/menyembunyikan info
    const toggleButton = document.getElementById('toggle-info');
    const infoTambahan = document.getElementById('info-tambahan');

    if (toggleButton && infoTambahan) {
        toggleButton.addEventListener('click', function(event) {
            event.preventDefault(); // Mencegah tautan melompat ke atas halaman
            
            // Periksa style display saat ini
            if (infoTambahan.style.display === 'none') {
                infoTambahan.style.display = 'block'; // Tampilkan
                toggleButton.textContent = 'Sembunyikan Info';
            } else {
                infoTambahan.style.display = 'none'; // Sembunyikan
                toggleButton.textContent = 'Tampilkan/Sembunyikan Info';
            }
        });
    }
});

function bukaDetailKarapan() {
    window.open("karapan-detail.html", "_blank");
}

function bukaDetailBatik() {
    window.open("batik-tulis.html", "_blank");
}

function bukaDetailKuliner() {
    window.open("kuliner.html", "_blank");
}