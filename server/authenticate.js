const User = require("./Schema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const isAuthenticated = async (req, res, next) => {
    const email = req.body.email
    const password = req.body.password

    try {
        let user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                message: "User doesn't exist"
            })
        }

        const match = await bcrypt.compare(password, user.password);
        if(!match){
            return res.status(400).json({
                message: "Incorrect Password !"
              });
        }

        const payload = {
            user: {
                id: user.id
            }
        }
        jwt.sign(payload,process.env.MONGODB_CONNECTION_STRING,{expiresIn: 604800}, (err, token) => {
            if (err) throw err;
            return res.status(200).json({token})
        } )
    } catch (err) {
        console.log(`err: ${err}`)
    }
}
//     const { token } = req.headers
//     if(!token){ 
//         console.log("token: ", token)
//         return next() 
// }
//     const data = jwt.decode(token)
//     console.log(data)
// }

module.exports = isAuthenticated
