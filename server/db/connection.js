const mongoose = require('mongoose');

// const DB = 'mongodb+srv://GaneshMaharnur:Test1234@firstmerncluster.c9vsads.mongodb.net/mern_project?retryWrites=true&w=majority';

// mongoose.connect(DB).then(() => {
//     console.log('Connection successful');
// }).catch((err) => {
//     console.log(err);
// })

mongoose.connect("mongodb://127.0.0.1:27017/mern_project",{ useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log('mongodb running'))
.catch(err => console.error('Error connecting to MongoDB:', err))


    