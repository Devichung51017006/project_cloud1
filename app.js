'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Halo Ini ada Website Kedua dengan Kubernetes dalam rangka Quiz 1 Mata Kuliah Cloud Computing\n')
    res.send('Nama Saya : Devi Chungiarto\n')
    res.send('NIM Saya  : 51017006\n')
    res.send('Jurusan Saya : Sistem informasi\n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)