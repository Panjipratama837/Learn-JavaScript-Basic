// Menghitung volume 2 kubus
function hitungKubus(a, b) {
  var total;
  var x = a ** 3;
  var y = b ** 3;
  total = x + y;

  return total;
}
alert(
  hitungKubus(
    prompt("Masukan Nilai Kubus : "),
    prompt("Masukan Nilai Kubus kedua : ")
  )
);
