const express = require('express')
const app = express()
const cors = require('cors');
const mongoose = require('mongoose')
app.use(express.json());


app.use(cors());

const uri = 'mongodb+srv://admin:sunny007@cluster0.hu9tcgq.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB Connected');
}
)


const notes = [
    {
      "id": 1,
      "content": "HTML is easy",
      "date": "2022-1-17T17:30:31.098Z",
      "important": true
    },
    {
      "id": 2,
      "content": "Browser can execute only JavaScript",
      "date": "2022-1-17T18:39:34.091Z",
      "important": false
    },
    {
      "id": 3,
      "content": "GET and POST are the most important methods of HTTP protocol",
      "date": "2022-1-17T19:20:14.298Z",
      "important": true
    }
  ]
app.get('/test', (req,res) => {
    res.json(notes)
}) 

app.get('/test/:id', (req,res) => {
  const id = req.params.id
  res.json(notes[1])
})

app.use('/', require('./routes/register'))

  app.listen(4000, () => {
    console.log(`Server running on port 4000`)
  })