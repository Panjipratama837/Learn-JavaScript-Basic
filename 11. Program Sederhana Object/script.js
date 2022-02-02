// Membuat Object Angkot
function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    if (this.penumpang.length == 0) {
      // Tambah penumpang diawal array
      this.penumpang.push(namaPenumpang);
      return this.penumpang;
    } else {
      // Telusuri seluruh kursi dari awal
      for (var i = 0; i < this.penumpang.length; i++) {
        // Jika ada kursi kosong
        if (this.penumpang[i] == undefined) {
          // Tambah penumpang di kursi tersebut
          this.penumpang[i] = namaPenumpang;

          // Kembalikan isi array & keluar dari function
          return this.penumpang;
        }
        // Jika sudah ada nama yang sama
        else if (this.penumpang[i] == namaPenumpang) {
          // Tampilkan pesan kesalahannya
          console.log(namaPenumpang + " sudah ada di dalam angkot.");
          // Kembalikan isi array & keluar dari function
          return this.penumpang;
        }
        // Jika seluruh kursi terisi
        else if (i == this.penumpang.length - 1) {
          // Tambah penumpang di akhir array
          this.penumpang.push(namaPenumpang);
          // Kembalikan isi array & keluar dari function
          return this.penumpang;
        }
      }
    }
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      alert("Angkot masih kosong !");
      return false;
    }

    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      }
    }
  };
}

var angkot1 = new Angkot("Sandhika Galih", ["Cicaheum", "Cibiru"], [], 0);

var angkot2 = new Angkot("Panji Pratama", ["Antapani", "Ciroyom"], [], 0);
