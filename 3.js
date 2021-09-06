function kotak(panjang) {
    let hasil = '';
    //baris
    for (let i = 0; i < panjang; i++) {
        //kolom
        for (let j = 0; j < panjang; j++) {
            hasil += '+';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(kotak(8));