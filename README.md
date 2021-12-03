# M05C01
M05C01 Ejercitación Patrones de diseño MVC

-------
Desde terminal en carpeta // es mejor usar git bash
npm init -y

para inicializar el programa package.json
-------
Se actualiza package.json

Original
  "main": "index.js",

Se actualiza a
 "main": "app.js",

-------
desde terminar instalar express
npm i express

Se va a crear la carpeta node_modules

// No es hacer el rastreo desde GIT de la carpeta node_modules, al momento de clonar en otro equipo solo se debe de ejecutar el comando *npm install*
--------
Se crea el archivo app.js en raiz
dentro de app.js se indica que se usara express

const express = require('express');
const app = express();
--------
Se configura servidor en app.js

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Servidor corriendo en puerto ${port}`);
})

el env.PORT se usa Heroku
--------
Se crea la lista la estructura de nuestro sitio: controllers, node_modules, public, routers, views
-------
Se configura mainController

const path = require('path');

const mainController = {
home: (req,res)=>{
    res.sendFile(path.join(__dirname, '../views/home.html'))
},
about:(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/about.html'))
}
};

module.exports = mainController;

-------
Se configura mainRouter

const express = require('express');
const mainController = require('../controllers/mainController');

const mainRouters = express.Router();

mainRouters.get('/',mainController.home);
mainRouters.get('/about',mainController.about);

module.exports = mainRouters;
-------

Ya se puede ejecutar node app.js

