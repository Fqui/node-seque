const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    //comprobar que existe el token
    if(!req.headers.authorization){
        res.status(401).json({message: "acceso denegado"})
    }
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, "mi_secreto");
    req.user= payload
    console.log(payload)
    next();
};