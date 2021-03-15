const express = require('express');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path')
const userModel = require('./models/userData')
const mailModel = require('./models/subscribe')
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

app.post("/data",async (req,res)=>{
  let data = new userModel({
    name: req.body.name,
    mail: req.body.mail,
    course: req.body.course,
    src: req.body.src,
    phone: req.body.phone
  })

  var ob1 = await data.save().then((doc)=>{
    console.log("ye save hua",doc);
    res.redirect("/");
  })

})

app.post("/subscribe", async (req,res)=>{
  console.log("hello")
  let data = new mailModel({
    mail: req.body.mail
  })

  var ob1 =  await data.save()
  .then((doc)=>{console.log("saved",doc)})
})

app.listen(port, () => {
    console.log('Server Started at ' + port);
});