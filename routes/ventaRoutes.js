// routes/ventaRoutes.js
const express = require("express");
const router = express.Router();
const ventaController = require("../controllers/ventaController");

// Rutas para ventas
router.get("/ventas", ventaController.getAll);
router.get("/ventas/:id", ventaController.getById);
router.post("/ventas", ventaController.create);
router.put("/ventas/:id", ventaController.update);
router.delete("/ventas/:id", ventaController.remove);

module.exports = router;
