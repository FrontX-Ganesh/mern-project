const express = require('express');
const app = express();
require('./db/connection');
app.use(express.json());
const User = require('./modal/userSchema');

app.use((require('./router/auth')));

const middlerware = (req, res, next) => {
    console.log(`HI from middleWare`);
    next();
}

app.get('/', (req, res) => {
    res.send(`Hello from server`);
});

app.get('/about', middlerware, (req, res) => {
    res.send(`Hello about page from server`);
});

app.get('/contact', (req, res) => {
    res.send(`Hello contact page from server`);
});

app.get('/signin', (req, res) => {
    res.send(`Hello login page from server`);
});

app.get('/signup', (req, res) => {
    res.send(`Hello registraion page from server`);
});

app.listen(4000, ()=> {
    console.log(`server is running`)
})