const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser =require('body-parser');
const path =require('path');

const enquiry= require('./routes/enquiry')
const interview= require('./routes/interview')


app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));

app.use('/enquiry',enquiry);
app.use('/interview',interview);

app.listen(3000)