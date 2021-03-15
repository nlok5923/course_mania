const express = require('express');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();

app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '/../public')));
app.use(express.static('public'));

mongoose
  .connect('mongodb+srv://creator:nnNN@@22@cluster0.bkrcv.mongodb.net/Images', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connected');
  })
  .catch((err) => {
    console.log('not connected');
});

app.get("/",(req,res)=>{
    res.render('index',{})
})

app.listen(port, () => {
    console.log('Server Started at ' + port);
});