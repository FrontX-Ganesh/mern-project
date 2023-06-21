const express = require('express');
const router = express.Router();
require('../db/connection');
const User = require("../modal/userSchema");

router.get('/', (req, res) => {
    res.send(`Hello from server router auth.js`);
});

router.post('/register', (req, res) => {

    const{ name, email, phone, password } = req.body;

    if( !name || !email || !phone || !password ){
        return res.status(422).json({ error: "Filled is mendotory." });
    }

    const user = new User({ name, email, phone, password });
    user.save().then(() => {
        res.status(201).json({ message: "Data save successfully." });
    }).catch((error) => {
        console.error("Error while saving user:", error);
        return res.status(500).json({ error: "Failed to register" });
    })
});

router.post('/login', async (req, res) => {

    const{ email, password } = req.body;

    if( !email || !password ){
        return res.status(422).json({ error: "Invalid crentials." });
    }

    const emailValue = await User.findOne({ email: email })

    if(emailValue){
        const userLogin = await User.findOne({ email: email, password: password });
        console.log(userLogin);
        if(userLogin){
            return res.status(200).json({ success: "User login successfully." });
        }else{
            return res.status(422).json({ error: "Anything missing in data." });
        }
    }else{
        return res.status(422).json({ error: "Invalid crentials." });
    }
    
});

module.exports = router;