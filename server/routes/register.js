const express = require('express')
const app = express()
const cors = require('cors');
const user = require('../models/user')

app.post('/register', (req,res) => {
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name
    user.create({
        name: name,
        email: email,
        password: password,
    }).then((err) => {
        res.json('created successfully')
        })
})
module.exports = app;
