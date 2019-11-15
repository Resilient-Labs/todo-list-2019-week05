const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db, collection;

const url = "mongodb+srv://jayden:april2017@cluster0-chjxm.mongodb.net/test?retryWrites=true&w=majority";
const dbName = "tasktracker";

app.listen(3000, () => {
    MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        db = client.db(dbName);
        console.log("Connected to `" + dbName + "`!");
    });
});

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  db.collection('taskitems').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {messages: result})
  })
})

app.post('/messages', (req, res) => {
  db.collection('messages').save({title: req.body.title, author: req.body.author, isbn: req.body.isbn}, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.put('/messages', (req, res) => {
  db.collection('messages')
  .findOneAndUpdate({title: req.body.title, author: req.body.author}, {
    $set: {

    }
  },{
    // searches through the DOM top to bottom and when the number is +1 the DOM is searched bottom to top
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

app.delete('/messages', (req, res) => {
  console.log(req.body);
  db.collection('messages').findOneAndDelete({title: req.body.title, author: req.body.author, isbn: (req.body.isbn).toString()}, (err, result) => {
    if (err) {
      console.log('delete failed')
      return res.send(500, err)
    }
    console.log('delete succeeded: ' + JSON.stringify(result))
    res.send('Message deleted!')
  })
})
