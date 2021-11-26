const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

/* Agregando static files */
app.use(express.static(path.join(__dirname,'public')));

/* Require routers*/
const mainRouters = require('./routers/mainRouter');

app.use('/',mainRouters);

app.listen(port,()=>{
    console.log(`Servidor corriendo en puerto ${port}`);
});
