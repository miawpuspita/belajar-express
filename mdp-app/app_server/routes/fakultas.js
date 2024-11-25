var express = require("express");
var router = express.Router();

<<<<<<< HEAD
const fakultasController = require("../controllers/fakultasController");

router.get("/", fakultasController.index);

router.post("/store", fakultasController.store);

=======
// impor controller
const fakultasController = require("../controllers/fakultasController");

/* GET list fakultas.*/
router.get("/", fakultasController.index);

>>>>>>> 1fea0b80f57fef2dd11a78caab21746880869caa
module.exports = router;