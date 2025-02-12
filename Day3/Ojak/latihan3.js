const readline = require("readline");

// variable declare
let a = 50;
let b = 2;

// modulos
function changeText() {
  var a = 50;
  var b = 2;
  document.getElementById("modulus").innerHTML =
    a + " mudolus dengan " + b + " = " + (a % b);
}
console.log(a + " mudolus dengan " + b + " = " + (a % b));

// tidak sama dengan
function changeText2() {
  var a = 50;
  var b = 2;
  document.getElementById("tidakSamaDengan").innerHTML =
    a + " sama dengan " + b + " = " + (a != b);
}
console.log(a + " sama dengan " + b + " = " + (a != b));

// pangkat
function changeText3() {
  var a = 50;
  var b = 2;
  document.getElementById("Pangkat").innerHTML =
    a + " pangkat " + b + " hasilnya : " + a ** b;
}
console.log(a + " pangkat " + b + " Hasilnya : " + a ** b + "\n");

// No 2
var jam = "5 sore";

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// input
function promptUser() {
  rl.question("Silahkan inputkan umur anda : ", (umur) => {
    if (isNaN(umur)) {
      console.log("Umur harus berupa angka.\n");
      rl.close();
      return;
    }
    console.log("Umur anda adalah : " + umur);
    if (jam == "5 sore") console.log("Anda sudah boleh pulang");

    if (umur >= 17) {
      console.log("Anda adalah seorang remaja\n");
    } else {
      console.log("Anda adalah seorang anak-anak\n");
    }

    rl.question("Silahkan inputkan sebuah angka : ", (angka) => {
      if (isNaN(angka)) {
        console.log("Input harus berupa angka.");
      } else {
        if (angka % 2 != 0)
          console.log("angka yang diInputkan adalah Bilangan Ganjil");
        else console.log("angka yang diInputkan adalah Bilangan Genap");
      }
      rl.close();
    });
  });
}

promptUser();
