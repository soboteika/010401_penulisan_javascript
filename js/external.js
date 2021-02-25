/*
 * Script PHP ini adalah pendukung materi belajar di Channel Youtube Soboteika:
 * Tutorial Dasar Cara Penulisan Dokumen Javascript
 * 
 * Video bisa dilihat di: 
 * https://youtu.be/b1VJZpBCM-M
*/

function a() {
    alert('halo saya JS')
}

function b() {
    var d = new Date();
    document.getElementById('target').innerHTML = d
}

function tabel() {
    var t = '';
    var angka = Math.floor(Math.random() * 10) + 1;
    for (var i = 1; i <= angka; i++) {
        t = t + '<tr><td>' + i + '</td><td>Agus</td><td>Surabaya</td></tr>';
    }
    document.getElementById('tbody').innerHTML = t;
}