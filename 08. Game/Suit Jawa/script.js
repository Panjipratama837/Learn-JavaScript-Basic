var tanya = true;
while (tanya) {
  // Menangkap pilihan player
  var p = prompt("Pilih : gajah, semut, orang !");

  // Menangkap pilihan computer & membangkitkan bilangan random
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  // Menentukan rules
  var hasil = "";
  if (p == comp) {
    hasil = "Draw";
  } else if (p == "gajah") {
    // if (comp == "orang") {
    //   hasil = "You Win !";
    // } else {
    //   hasil = "You Lose !";
    // }

    hasil = comp == "orang" ? "You Win !" : "You Lose !"; // Menggunakan operator ternari, menjadi lebih singkat
  } else if (p == "orang") {
    hasil = comp == "gajah" ? "You Lose !" : "You Win !";
  } else if (p == "semut") {
    hasil = comp == "orang" ? "You Lose !" : "You Win !";
  } else {
    hasil = "Anda memasukkan pilihan yang salah";
  }

  // Tampilkan hasil
  alert(
    "Anda memilih " +
      p +
      " dan komputer memilih " +
      comp +
      "\nMaka hasilnya : " +
      hasil
  );

  tanya = confirm("Ingin bermain lagi?");
}

alert("Terima kasih sudah bermain.");
