const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.render("index.ejs")
})

app.get('/add', function (req, res) {
  res.render("add.ejs")
})

app.get('/notification', function (req, res) {
  res.render("notification.ejs")
})

app.get('/massage', function (req, res) {
  res.render("massage.ejs")
})

app.get('/profile', function (req, res) {
  res.render("profile.ejs")
})

app.get('/search', function (req, res) {
  res.render("search.ejs")
})

app.get('/login', function (req, res){
  res.render("login.ejs")
})

app.get('/innermassage', function (req, res){
  res.render("massageinner.ejs")
})

app.get('/follower', function (req, res){
  res.render("follower.ejs")
})

app.get('/following', function (req, res){
  res.render("following.ejs")
})


app.listen(3000)