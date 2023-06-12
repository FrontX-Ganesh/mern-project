const mongoose = require('mongoose');

const DB = 'mongodb+srv://GaneshMaharnur:Test1234@firstmerncluster.c9vsads.mongodb.net/mern_project?retryWrites=true&w=majority';

mongoose.connect(DB,).then(() => {
    console.log('Connection successful');
}).catch((err) => {
    console.log(err);
})