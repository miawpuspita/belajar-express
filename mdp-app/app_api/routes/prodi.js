const express = require("express");

const router = express.Router();

const prodiController = require("../controllers/prodiController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", prodiController.getAllProdi);

router.post("/", authMiddleware,roleMiddleware("admin"), prodiController.createProdi);

router.get("/:id", prodiController.getProdiById);

router.put("/:id", authMiddleware,roleMiddleware("admin"),prodiController.updateProdi);

router.delete("/:id", authMiddleware,roleMiddleware("admin"),prodiController.deleteProdi);

module.exports = router;

