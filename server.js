const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db, collection;

const url = "mongodb+srv://jayden:april2017@cluster0-chjxm.mongodb.net/test?retryWrites=true&w=majority";
const dbName = "tasktracker";

app.listen(8000, () => {
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
    res.render('index.ejs', {taskitems: result})
  })
})

app.post('/taskitems', (req, res) => {
  console.log(req.body.userInput);
  db.collection('taskitems').insertOne({taskitems: req.body.userInput}, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.put('/taskitems', (req, res) => {
  db.collection('taskitems')
  .findOneAndUpdate({taskitems: req.body.userInput}, {
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

app.delete('/taskitems', (req, res) => {
  db.collection('taskitems').findOneAndDelete({taskitem: req.body.taskitem}, (err, result) => {
    if (err) {
      console.log('delete failed')
      return res.send(500, err)
    }
    console.log('delete succeeded: ' + JSON.stringify(result))
    res.send('Message deleted!')
  })
})
