<<<<<<< HEAD
// middleware/authMiddleware.js
const jwt = require("jsonwebtoken"); // Mengimpor jsonwebtoken untuk memverifikasi token

// Middleware untuk memverifikasi JWT token
const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Mendapatkan token dari header Authorization
  if (!token) {
    // Jika token tidak ada
    return res.status(401).json({ message: "No token, authorization denied" }); // Kirim respons tidak ada token
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verifikasi token dengan secret
    req.user = decoded; // Menyimpan payload token ke req.user
    next(); // Lanjutkan ke middleware berikutnya
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" }); // Kirim respons jika token tidak valid
  }
};

module.exports = authMiddleware; // Mengekspor middleware
=======
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
>>>>>>> 1fea0b80f57fef2dd11a78caab21746880869caa
