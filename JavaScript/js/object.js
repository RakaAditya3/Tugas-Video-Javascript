const Objek = {
    nama: "RAKA ADITYA",
    telp: 123455,
    
    buah : ['apel', 'jeruk', 'stroberi'],

    coba: function () {
        return "COBA FUNCTION DALAM OBJECT";
    },

    boleh:true,
    "TULIS AJA" : 12345

}

console.log(Objek.nama);
console.log(Objek.telp);
console.log(Objek.boleh);
console.log(Objek.coba());
console.log(Objek.buah[1]);
console.log(Objek["TULIS AJA"]);