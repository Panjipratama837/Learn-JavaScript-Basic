var again = true;
var loop = 3;
var nilai = Math.floor(Math.random() * 10) + 1;

while (again) {
  for (loop; loop >= 1; loop--) {
    // Menangkap pilihan player
    alert(
      "Tebak angka yang dicari dari 1 - 10 \nKamu diberi " +
        loop +
        " kesempatan"
    );
    var p = prompt("Angka yang anda pilih : ");

    // Menangkap nilai angka yang akan ditebak

    console.log("Nilai : " + nilai);

    if (p == nilai) {
      alert("Selamat, tebakan anda benar !");
      break;
    } else if (p < nilai) {
      alert("Tebakan anda terlalu rendah !");
    } else {
      alert("Tebakan anda terlalu tinggi !");
    }
    if (loop == 1) {
      alert("Kesempatan anda telah habis \nAngka yang di cari adalah " + nilai);
    }

    console.log("Loop " + loop);
    again = confirm("Ingin bermain lagi?");
  }
}
alert("Terima kasih sudah bermain");
