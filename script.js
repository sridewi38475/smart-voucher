// =========================================================================
// PROYEK JAVASCRIPT: SMART VOUCHER (MINI ISP SEKOLAH - TeFa TKJ)
// Versi Interaktif: Mengambil data langsung dari Form HTML (bisa diubah-ubah)
// =========================================================================

// Menghitung rata-rata 5 paket harga voucher yang tersedia (Misi Level 2)
let rataRataPaket = (2000 + 5000 + 10000 + 25000 + 75000) / 5;
document.getElementById("rata-rata-harga").textContent = "Rp" + rataRataPaket.toLocaleString("id-ID");

// Menjalankan proses transaksi saat form dikirim (klik tombol / tekan Enter)
document.getElementById("kasir-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah halaman reload agar struk langsung tampil

  // 1. AMBIL DATA DARI FORM INPUT HTML
  let inputNama = document.getElementById("in-nama").value;
  let inputKelas = document.getElementById("in-kelas").value;
  let inputNomorUrut = document.getElementById("in-nomor").value;

  // Memecah value dropdown paket (format: "1 Hari|10000") menjadi jenis & harga
  let dataPaket = document.getElementById("in-paket").value.split("|");
  let inputJenisVoucher = dataPaket[0];
  let hargaVoucher = Number(dataPaket[1]);

  let jumlahVoucher = Number(document.getElementById("in-jumlah").value);
  let uangPembayaran = Number(document.getElementById("in-bayar").value);

  // 2. MANIPULASI STRING
  let namaBersih = inputNama.trim();
  let namaKapital = namaBersih.toUpperCase();
  let panjangNama = namaBersih.length;
  let jenisVoucherKecil = inputJenisVoucher.trim().toLowerCase();

  let kelasBersih = inputKelas.trim().toUpperCase();
  let nomorBersih = inputNomorUrut.trim();

  // Penggabungan string (Concatenation) untuk Kode Transaksi
  let kodeTransaksi = "SV-" + nomorBersih;

  // Misi Tambahan (Level 2): Kode gabungan inisial nama & kelas
  let inisialNama = namaKapital.slice(0, 2);
  let kodeLengkap = kodeTransaksi + "-" + inisialNama + "-" + kelasBersih.replaceAll(" ", "");

  // 3. OPERASI ARITMATIKA
  const PERSEN_DISKON = 5 / 100; // 5%
  const BIAYA_ADMIN = 1000;      // Rp1.000

  let subtotal = hargaVoucher * jumlahVoucher;
  let diskon = subtotal * PERSEN_DISKON;
  let totalPembayaran = subtotal - diskon + BIAYA_ADMIN;
  let uangKembalian = uangPembayaran - totalPembayaran;

  // 4. TAMPILKAN KE STRUK HTML
  document.getElementById("out-kode").textContent = kodeTransaksi;
  document.getElementById("out-nama").textContent = namaKapital;
  document.getElementById("out-panjang-nama").textContent = panjangNama + " karakter";
  document.getElementById("out-kelas").textContent = kelasBersih;
  document.getElementById("out-voucher").textContent = "voucher " + jenisVoucherKecil;
  document.getElementById("out-harga").textContent = "Rp" + hargaVoucher.toLocaleString("id-ID");
  document.getElementById("out-jumlah").textContent = jumlahVoucher + " pcs";

  document.getElementById("out-subtotal").textContent = "Rp" + subtotal.toLocaleString("id-ID");
  document.getElementById("out-diskon").textContent = "- Rp" + diskon.toLocaleString("id-ID");
  document.getElementById("out-admin").textContent = "Rp" + BIAYA_ADMIN.toLocaleString("id-ID");
  document.getElementById("out-total").textContent = "Rp" + totalPembayaran.toLocaleString("id-ID");
  document.getElementById("out-bayar").textContent = "Rp" + uangPembayaran.toLocaleString("id-ID");
  document.getElementById("out-kembalian").textContent = "Rp" + uangKembalian.toLocaleString("id-ID");

  // Ringkasan transaksi menggunakan Template Literal
  let ringkasanStruk = `Halo ${namaKapital} (${kelasBersih})! Transaksi ${kodeLengkap} untuk ${jumlahVoucher} paket voucher ${jenisVoucherKecil} berhasil diproses dengan total Rp${totalPembayaran.toLocaleString("id-ID")}.`;
  document.getElementById("out-ringkasan").textContent = ringkasanStruk;

  // 5. OUTPUT KE CONSOLE (Tantangan Teknis No. 9 & 10)
  console.clear();
  console.log("==========================================");
  console.log("      LAPORAN TRANSAKSI SMART VOUCHER     ");
  console.log("==========================================");
  console.log("Kode Transaksi      :", kodeTransaksi);
  console.log("Kode Lengkap (Lv.2) :", kodeLengkap);
  console.log("Nama Pelanggan      :", namaKapital);
  console.log("Panjang Nama        :", panjangNama, "karakter");
  console.log("Kelas Pelanggan     :", kelasBersih);
  console.log("Jenis Voucher       :", jenisVoucherKecil);
  console.log("------------------------------------------");
  console.log("PENGECEKAN TIPE DATA (typeof):");
  console.log("Tipe data nama      :", typeof namaKapital);
  console.log("Tipe data harga     :", typeof hargaVoucher);
  console.log("Tipe data jumlah    :", typeof jumlahVoucher);
  console.log("------------------------------------------");
  console.log("RINCIAN PERHITUNGAN:");
  console.log("Harga Voucher       : Rp" + hargaVoucher.toLocaleString("id-ID"));
  console.log("Jumlah Beli         :", jumlahVoucher);
  console.log("Subtotal            : Rp" + subtotal.toLocaleString("id-ID"));
  console.log("Diskon (5%)         : Rp" + diskon.toLocaleString("id-ID"));
  console.log("Biaya Administrasi  : Rp" + BIAYA_ADMIN.toLocaleString("id-ID"));
  console.log("Total Pembayaran    : Rp" + totalPembayaran.toLocaleString("id-ID"));
  console.log("Uang Pembayaran     : Rp" + uangPembayaran.toLocaleString("id-ID"));
  console.log("Uang Kembalian      : Rp" + uangKembalian.toLocaleString("id-ID"));
  console.log("Rata-rata 5 Paket   : Rp" + rataRataPaket.toLocaleString("id-ID"));
  console.log("==========================================");
  console.log("RINGKASAN:", ringkasanStruk);
});

// Otomatis memproses data default saat halaman pertama kali dibuka
document.getElementById("kasir-form").dispatchEvent(new Event("submit"));
