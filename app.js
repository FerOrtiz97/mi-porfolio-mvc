const express = require('express');
const app = express();
const indexRouter = require('./routers/indexRouter.js');
const aboutRouter = require('./routers/aboutRouter.js')


app.use('/', indexRouter);
app.use('/about', aboutRouter);

app.use(express.static(__dirname + '/public'));

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
    });
    
