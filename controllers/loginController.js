const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const User = require('../model/user.model');

const loginHandler = async (req, res) => {
        try{
            const user = await User.findOne({ Number: req.body.Number });
            !user && res.status(401).json({ Message: "Incorrect Mobile Number "});

            const decodedPassword = CryptoJS.AES.decrypt(user.Password, process.env.PASSWORD_SECRET_KEY).toString(CryptoJS.enc.Utf8);
            // console.log({decodedPassword});
            decodedPassword !== req.body.Password && res.status(401).json({ Message: "Incorrect Password" });

            const { Password, ...rest } = user._doc;
            const accessToken = jwt.sign({UserName: user.UserName}, process.env.ACCESS_TOKEN)

            res.json({...rest, accessToken});
            // res.json(user);

        }catch(err){
            res.status(500).json({ Message: "Error Finding a User!!" });
        }
    }

module.exports = loginHandler