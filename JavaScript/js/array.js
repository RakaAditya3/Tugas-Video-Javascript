let coba = function () {
    return "COBA FUNCTION";
}



let buah = ['apel', 
    'jeruk', 
    'semangka', 
    coba(), 
    (tes = () => "HASIL RETURN DARI ARROW FUNCTION"),
    function nama() {
        return "RAKA ADITYA";
    },
];
console.log(buah);

console.log(buah[1]);

for (let i in buah) {
    console.log(buah[i]);
}

console.log(buah[4]());
console.log(buah[5]());