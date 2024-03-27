const express = require('express') //mengimpor modul express
const app = express() //membuat aplikasi express dengan memanggil fungsi express
const port = 3000 //menentukan port yang akan digunakan

app.get('/',function(req,res) { //melakukan req ke metode get dengan diberi akses ke rute utama ('/')
    res.send('Hae') //mengirimkan res berupa teks 'Hae' ke dalam web
})

app.listen(port, function () { //menjalankan dengan port yang sudah ditentukan
    console.log('Masyaallah')
})