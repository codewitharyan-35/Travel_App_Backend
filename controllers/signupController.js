const CryptoJS = require("crypto-js");

const User = require('../model/user.model');

const signupHandler = async (req, res) => {
        try{
            // const userObject = {
            //     UserName: req.body.UserName,
            //     Number: req.body.Number,
            //     Email: req.body.Email,
            //     Password: req.body.Password,
            // }
            const newUser = new User({
                UserName: req.body.UserName,
                Number: req.body.Number,
                Email: req.body.Email,
                Password: CryptoJS.AES.encrypt(req.body.Password, process.env.PASSWORD_SECRET_KEY).toString(),
            });
            const savedUser = await newUser.save();
            res.status(201).json(savedUser);
        } catch(err){
            res.status(500).json({ Message: "Error creating a user!!" });
        }
    }

module.exports = signupHandler;