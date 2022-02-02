var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  // Jika angkot kosong
  if (penumpang.length == 0) {
    // Tambah penumpang diawal array
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    // Telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // Jika ada kursi kosong
      if (penumpang[i] == undefined) {
        // Tambah penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;

        // Kembalikan isi array & keluar dari function
        return penumpang;
      }
      // Jika sudah ada nama yang sama
      else if (penumpang[i] == namaPenumpang) {
        // Tampilkan pesan kesalahannya
        console.log(namaPenumpang + " sudah ada di dalam angkot.");
        // Kembalikan isi array & keluar dari function
        return penumpang;
      }
      // Jika seluruh kursi terisi
      else if (i == penumpang.length - 1) {
        // Tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // Kembalikan isi array & keluar dari function
        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    console.log("Angkot masih kosong. ");
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log(namaPenumpang + " tidak ada di dalam angkot");
        return penumpang;
      }
    }
  }

  return penumpang;
};
