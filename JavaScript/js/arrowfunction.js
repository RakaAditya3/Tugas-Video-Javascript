let fungsi = function (nama) {
    console.log("SINAU FUNCTION " + nama )
}

fungsi("RAKA");

let contoh = (nama) => {
    console.log("SINAU function " + nama);
}

contoh("DARMA");

let tambah = function(a,b){
    return a + b;
}

console.log(tambah(2, 5));

let plus = (a,b) => a+b;

console.log(plus(2,10));

let hasil = a => a*2;

console.log(hasil(5));

let lagi = () =>console.log("COBA LAGI");

lagi();

let belajar =()=>{
    console.log("BARIS 1");
    console.log("BARIS 2");
    console.log("BARIS 3");
}

belajar();


let nilai = 9;
let ujicoba = nilai < 8 ? () => (predikat ="GAGAL") : () => (predikat ="LULUS");
console.log(ujicoba());
