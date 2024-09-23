function tampil(b) {
    a = document.querySelector("p").innerText = "BELAJAR EVENT JS " + b;
    // a.innerText = "BELAJAR EVENT JS"
    console.log("SINAU EVENT JS");
}

judul.onclick = function() {
    // console.log("SINAU EVENT JS MENGGUNAKAN ID");
    document.querySelector(".isi").innerHTML = "SINAU EVENT JS MENGGUNAKAN ID";
}