var quest = true;

while (quest) {
  var makanan = prompt(
    "Masukan nama makanan / minuman : \nContoh : nasi, daging, susu, hamburger, softdrink"
  );

  switch (makanan) {
    case "nasi":
    case "daging":
    case "susu":
      alert("Makanan ini sehat");
      break;

    case "hamburger":
    case "softdrink":
      alert("Makanan ini tidak sehat !!");
      break;

    default:
      alert("Anda memasukan makanan / minuman yang tidak ada di list");
      break;
  }

  quest = confirm("Lagi?");
}
