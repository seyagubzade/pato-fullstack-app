const express = require("express");
const router = express.Router();
const { PatoProdsController } = require("../controllers/PatoProds.controller");

router.get("/", PatoProdsController.getAll);
router.get("/:id", PatoProdsController.getById);
router.delete("/:id", PatoProdsController.deleteById);
router.post("/", PatoProdsController.add);


module.exports = router