<<<<<<< HEAD
// middleware/roleMiddleware.js

// Middleware untuk memeriksa peran pengguna
const roleMiddleware = (requiredRole) => {
    return (req, res, next) => {
      if (req.user && req.user.role === requiredRole) {
        // Jika pengguna memiliki role yang sesuai
        next(); // Lanjutkan ke middleware berikutnya
      } else {
        // Jika tidak memiliki role yang sesuai
        res.status(403).json({ message: "Access denied" }); // Kirim respons akses ditolak
      }
    };
  };
  
  module.exports = roleMiddleware; // Mengekspor middleware
=======
const roleMiddleware = (requiredRole) => {
    return ( req, res, next) => {
        // jika role pengguna sesuai
        if(req.user && req.user.role === requiredRole){
            next();
        }else{
            res.status(403).json({
                message: "acces devied"
            });
        }
    }
}
>>>>>>> 1fea0b80f57fef2dd11a78caab21746880869caa
