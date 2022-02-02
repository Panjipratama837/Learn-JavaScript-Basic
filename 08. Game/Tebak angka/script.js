var loop = 3;
var nilai = Math.floor(Math.random() * 10) + 1;
while (loop >= 1) {
  // Menangkap pilihan player
  alert(
    "Tebak angka yang dicari dari 1 - 10 \nKamu diberi " + loop + " kesempatan"
  );
  var p = prompt("Angka yang anda pilih : ");

  // Menangkap nilai angka yang akan ditebak

  console.log(nilai);

  if (p == nilai) {
    alert("Selamat, tebakan anda benar !");
    break;
  } else if (p < nilai) {
    alert("Tebakan anda terlalu rendah !");
  } else {
    alert("Tebakan anda terlalu tinggi !");
  }
  loop--;
  if (loop == 0) {
    alert("Kesempatan anda telah habis \nAngka yang di cari adalah " + nilai);
  }
}

alert("Terima kasih sudah bermain");
