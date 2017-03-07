'use strict';

import express from 'express';
import path from 'path';
import compression from 'compression';

var app = express();
app.use(compression());

app.use(express.static(path.join(__dirname, 'web-build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'web-build', 'index.html'));
});

app.listen(process.env.PORT || 3000, function () {
    console.log('App started on 3000!');
});