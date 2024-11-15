// import jsonwebtoken
const jwt = require("jsonwebtoken")

//verifikasi jwbtoken
const authMiddleware = (req, res, next) => {
    // ambil token saja dari bearer token  yang dikirim
    const token = req.header("Authorization")?.split(" ")[1];

    // jika tidak ada token 
    if(!token) {
        return res.status(401).json({
            massege: "No token, authorization denied"
        });
    }

    // jika ada token
    try{
        //verfikasi token
        const decoded =jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded
        next();
    } catch (erorr){
        res.status(401).json({
            message:"Token is not valid"
        });

    }
}

module.exports = authMiddleware;