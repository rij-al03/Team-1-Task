// perbedaan var dan let
function Data() {
  // Defenisi variable
  var nama = "Abdul Rozaq"; // variable var (global Scope)
  let jabatan = "Web Developer";
  let umur = 20;
  let alamat = "Kota Padang";
  if (true) {
    // let terbatas di dalam scopenya
    let nama = "Zeo"; // variable let (just fo in scope) di dalam scope if
  }
  document.getElementById("nama").textContent = "Nama: " + nama; //akan memanggil variable var dengan value (Abdul Rozaq)
  document.getElementById("jabatan").textContent = "Jabatan: " + jabatan;
  document.getElementById("umur").textContent = "Umur: " + umur + " tahun";
  document.getElementById("alamat").textContent = "Alamat: " + alamat;
}

document.addEventListener("DOMContentLoaded", function () {
  Data();
});

class Hobi {
  constructor(hobi) {
    this.hobi = hobi;
  }

  displayHobi() {
    return this.hobi.join(", ");
  }
}

const myHobi = new Hobi(["Bermain game", "Membaca", "Tidur"]);
