'use strict';

let express = require('express');
let app = express();
let router = require('./routers');
let config = require('./config');

app.use('/api',router.api);



app.listen(3000,()=> console.log('> localhost:3000'));