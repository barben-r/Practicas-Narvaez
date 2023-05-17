var express = require('express') //llamamos a Express
var app = express()

var port = process.env.PORT || 8080  // establecemos nuestro puerto

app.get('/', function (req, res) {

    var p3 = Math.floor((Math.random() * (6 - 1 + 1)) + 1);


    let tabla = [
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', '']
    ];
    let i =0;
    while (i<6) {
        var p1 = Math.floor((Math.random() * (5 - 0 + 1)) + 0);
        var p2 = Math.floor((Math.random() * (5 - 0 + 1)) + 0);
        if(tabla[p1][p2]==''){
            tabla[p1][p2]='#'+((Math.random()*0xfffff *1000000).toString(16)).slice(0,6);
            i++;
        }
    }


    console.log(tabla);
    res.json({ mensaje: '¡Hola mundo!' })

})

app.get('/cervezas', function (req, res) {
    res.json({ mensaje: '¡A beber cerveza!' })
})

app.post('/', function (req, res) {
    res.json({ mensaje: 'Método post' })
})

app.del('/', function (req, res) {
    res.json({ mensaje: 'Método delete' })
})

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)