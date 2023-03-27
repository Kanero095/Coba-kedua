// welcome
alert('Selamat Datang di Game Suwit')

// start
var mulai = confirm('Apakah anda ingin memulai permainan');
while (mulai == true) {
    // statement pemain
    var pemain = prompt('Masukkan pilihan anda!! *gajah, orang, semut');


    // statement komputer
    var com = Math.random();
    if (com < 0.35) {
        com = 'gajah';
    } else if (com > 0.36 && com < 0.6) {
        com = 'orang';
    } else {
        com = 'semut';
    }

    // proses statement
    var hasil = '';
    if (pemain == com) {
        hasil = 'Seri!!';
    } else if (pemain == 'gajah') {
        hasil = (random = 'orang') ? 'Anda Menang!!' : 'Anda Kalah';
    } else if (pemain == 'orang') {
        hasil = (random == 'semut') ? 'Anda Menang!!' : 'Anda Kalah';
    } else if (pemain == 'semut') {
        hasil = (random == 'orang') ? 'Anda Kalah!!' : 'Anda Menang';
    } else {
        alert('Yang anda masukkan salah!!');
    }

    // hasil
    alert("Pilihan anda '" + pemain + "' dan komputer memilih '" + com + "' \nHasilnya adalah " + hasil);

    // restart
    var mulai = confirm('Apakah anda ingin bermain lagi');
}