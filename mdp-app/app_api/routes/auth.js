<<<<<<< HEAD
const express = require("express"); // Mengimpor express untuk membuat rute
const router = express.Router(); // Membuat instance router dari express
const authController = require("../controllers/authController"); // Mengimpor controller auth

// Rute untuk register pengguna baru
router.post("/register", authController.register);

// Rute untuk login pengguna
router.post("/login", authController.login);

module.exports = router; // Mengekspor router
=======
const express = require("express")
const router = express.Router()
const authController = require ("../controllers/authController")

//rute register
router.post("/register", authController.register)

//rute login
router.post("/login", authController.login)

module.exports = router
>>>>>>> 1fea0b80f57fef2dd11a78caab21746880869caa
