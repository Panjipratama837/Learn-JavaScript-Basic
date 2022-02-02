let loop = true;

while (loop) {
  let q1 = parseInt(
    prompt("Pertanyaan pertama silahkan pilih : \n1. Aku \n2. Kamu")
  );
  switch (q1) {
    case 1:
      q1 = "Aku";
      alert("Anda memilih " + q1);
      break;

    case 2:
      q1 = "Kamu";
      alert("Anda memilih " + q1);
      break;

    default:
      alert("Anda memasukan pilihan yang tidak tersedia");
      break;
  }

  let q2 = parseInt(
    prompt(
      "Pertanyaan kedua silahkan pilih : \n1. Sayang \n2. Kangen \n3. Benci"
    )
  );
  switch (q2) {
    case 1:
      q2 = "Sayang";
      alert("Anda memilih " + q2);
      break;

    case 2:
      q2 = "Kangen";
      alert("Anda memilih " + q2);
      break;

    case 3:
      q2 = "Benci";
      alert("Anda memilih " + q2);
      break;

    default:
      alert("Anda memasukan pilihan yang tidak tersedia");
      break;
  }

  let q3 = parseInt(
    prompt("Pertanyaan ketiga silahkan pilih : \n1. aku ya! \n2. banget!")
  );
  switch (q3) {
    case 1:
      q3 = "aku ya!";
      alert("Anda memilih " + q3);
      break;

    case 2:
      q3 = "banget!";
      alert("Anda memilih ' " + q3 + " '");
      break;

    default:
      alert("Anda memasukan pilihan yang tidak tersedia");
      break;
  }
  alert(q1 + " " + q2 + " " + q3);
  loop = confirm("Lagi?");
}

// var quest = true;

// while (quest) {
//   var makanan = prompt(
//     "Masukan nama makanan / minuman : \nContoh : nasi, daging, susu, hamburger, softdrink"
//   );

//   switch (makanan) {
//     case "nasi":
//     case "daging":
//     case "susu":
//       alert("Makanan ini sehat");
//       break;

//     case "hamburger":
//     case "softdrink":
//       alert("Makanan ini tidak sehat !!");
//       break;

//     default:
//       alert("Anda memasukan makanan / minuman yang tidak ada di list");
//       break;
//   }

//   quest = confirm("Lagi?");
// }
