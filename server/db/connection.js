const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/mern_project",{ useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log('mongodb running'))
.catch(err => console.error('Error connecting to MongoDB:', err))