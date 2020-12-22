const User = require('./Schema')
const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')

const authenticate  = async (req, res, next) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        let user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })
        console.log(user)
        return res.json({
                message: 'user added succesfully!'
        })

    } catch (err) {
        return res.json({
            err: err
        })
    }

}
module.exports = authenticate