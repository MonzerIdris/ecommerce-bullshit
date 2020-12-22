const jwt = require("jsonwebtoken");
require("dotenv").config()
module.exports = async (req, res, next)  => {
  const token = req.header('Authorization')
  console.log(token)
  if (!token) return res.status(401).json({ message: "Auth Error" });

  try {
    const decoded = jwt.verify(token, process.env.MONGODB_CONNECTION_STRING/*, (err, decode) => {
      if (err){
        console.log(`err: ${err}`)
        res.status(401).json('Unauthorized')
      }
    }*/);
    req.user = decoded.user;
    const data = jwt.decode(token)
    console.log(data)
    next();
  } catch (err) {
    console.log(`err: ${err.message}`);
    res.status(500).send({ message: "Invalid Token" });
  }
};