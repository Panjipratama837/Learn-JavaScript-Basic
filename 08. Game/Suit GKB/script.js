var tanya = true;

while (tanya) {
  // Menangkap pilihan player
  var p = prompt("Pilih : gunting, kertas, batu");

  // Menangkap pilihan computer & membangkitkan bilangan random
  var comp = Math.random();

  if (comp <= 0.34) {
    comp = "gunting";
  } else if (comp > 0.34 && comp <= 0.67) {
    comp = "kertas";
  } else {
    comp = "batu";
  }

  // Menentukan rules
  var hasil = "";

  if (p == comp) {
    hasil = "Draw";
  } else if (p == "gunting") {
    hasil = comp == "kertas" ? "You Win !" : "You Lose !";
  } else if (p == "kertas") {
    hasil = comp == "gunting" ? "You Lose !" : "You Win !";
  } else if (p == "batu") {
    hasil = comp == "kertas" ? "You Lose !" : "You Win !";
  } else {
    hasil = "Anda memasukan pilihan yang salah !";
  }
  // Menampilkan hasil
  alert(
    "Anda memilih " +
      p +
      " & computer memilih " +
      comp +
      "\nMaka hasilnya : " +
      hasil
  );

  tanya = confirm("Ingin bermain lagi?");
}
alert("Terima kasih sudah bermain !");
