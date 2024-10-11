// Fungsi untuk menampilkan promo hari ini
function tampilkanPromo(){
    let hari = new Date().getDay();
    let promo = "";
    if(hari === 0 || hari === 6){
        promo = "Diskon 25% untuk semua level Pedas";
    } else {
        promo = "Beli 3 gratis 1 untuk seblak level 5.";
    }
    document.getElementById("promoMessage").innerHTML = promo;
}

// daftar menu seblak 
let menuFavorit = [
    {nama: "Seblak Kerupuk", harga: 15000, diskon: false},
    {nama: "Seblak Ceker", harga: 18000, diskon: true}, //diskon 25%
    {nama: "Seblak Kikil", harga: 20000, diskon: false},
    {nama: "Seblak Bakso", harga: 17000, diskon: true} //diskon 25%
];

let totalHargaSetelahDiskon = 0;

// Fungsi untuk menampilkan daftar menu favorit 
function tampilkanMenu() {
    let listMenu = document.getElementById("listMenu");
    let pilihMenu = document.getElementById("pilihMenu");
    
    // Menghapus list dan dropdown sebelumnya
    listMenu.innerHTML = "";
    pilihMenu.innerHTML = "";

    // Menampilkan menu ke dalam list dan dropdown
    menuFavorit.forEach((item, index) => {
        // Membuat list menu (ul/li)
        let liMenu = document.createElement("li");
        liMenu.textContent = `${item.nama} - Rp ${item.harga}`;
        listMenu.appendChild(liMenu);

        // Membuat dropdown menu (select/option)
        let optionMenu = document.createElement("option");
        optionMenu.value = index;
        optionMenu.textContent = item.nama;
        pilihMenu.appendChild(optionMenu);
    });
}

// Fungsi untuk memeriksa jumlah pesanan
function cekPesanan(){
    let menuIndex = document.getElementById("pilihMenu").value;
    let jumlah = document.getElementById("inputJumlah").value;
    let hasil = '';
    let total = 0;

    // Validasi jumlah pesanan
    if(jumlah > 20){
        hasil = 'Maaf, maksimal pesanan 20 item per menu.';
    } else if(jumlah >= 1 && jumlah <= 20){
        let menuPilihan = menuFavorit[menuIndex];
        let hargaPerItem = menuPilihan.harga;

        // Cek apakah menu memiliki diskon 
        if(menuPilihan.diskon){
            hargaPerItem = hargaPerItem - (hargaPerItem * 0.25);
        }

        total = hargaPerItem * jumlah;
        totalHargaSetelahDiskon = total;

        hasil = `Total harga setelah diskon: Rp ${total}. Pesanan ${jumlah} porsi ${menuPilihan.nama} telah diterima.`;
    } else {
        hasil = 'Silakan masukkan jumlah pesanan yang valid.';
    }

    // Menampilkan hasil pesanan
    document.getElementById("hasilPesanan").innerHTML = hasil;
    document.getElementById("totalBayar").innerHTML = `Total bayar: Rp ${total}`;
}

// Fungsi untuk menghitung kembalian
function hitungKembalian() {
    let uangBayar = document.getElementById("uangBayar").value;
    let totalBayar = totalHargaSetelahDiskon;
    let hasilKembalian = '';

    // Validasi input uang bayar
    if (uangBayar >= totalBayar) {
        let kembalian = uangBayar - totalBayar;
        hasilKembalian = `Kembalian Anda: Rp ${kembalian}`;
    } else {
        hasilKembalian = 'Maaf, uang Anda tidak cukup.';
    }

    // Menampilkan hasil kembalian
    document.getElementById("hasilKembalian").innerHTML = hasilKembalian;
}

