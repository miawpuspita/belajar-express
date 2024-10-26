const express = require("express");

const router = express.Router();

const prodiController = require("../controllers/prodiController");

router.get("/", prodiController.getAllprodi);

router.post("/", prodiController.createProdi);

router.get("/:id", prodiController.getProdiyId);

router.put("/:id", prodiController.updateProdi);

router.delete("/:id", prodiController.deleteProdi);

module.exports = router;
