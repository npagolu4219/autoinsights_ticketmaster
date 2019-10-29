const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fields = require('./routes/api/fields');

const app = express();
app.use(bodyParser.json());

const dbRoute = 'mongodb+srv://nagarjuna:npagolu4219@cluster0-di09x.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(dbRoute,{useNewUrlParser:true})
.then(()=> console.log("mongoDb has connected"))
.catch(err => console.log(err));

app.use('/api/fields',fields);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server has started on port ${port}`));
