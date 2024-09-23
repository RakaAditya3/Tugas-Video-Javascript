if(true) {
    console.log("DIJALANKAN JIKA BENER");
} else {
    console.log("DIJALANKAN JIKA SALAH");
}

let nilai = 85;
let kkm = 80
let baik = "TIDAK REMIDI";
let gagal = "REMIDI";
let batasatas = 100;
let batasbawah = 0;
let peringatan = "NILAI SALAH";

if (nilai <= batasatas && nilai >= batasbawah) {
    if (nilai >= kkm) {
        console.log(baik);
    } else {
        console.log(gagal);
    }
} else {
    console.log(peringatan);
}


