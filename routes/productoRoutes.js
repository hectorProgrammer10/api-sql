// routes/productoRoutes.js
const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoController");

// Rutas para productos
router.get("/productos", productoController.getAll);
router.get("/productos/:id", productoController.getById);
router.post("/productos", productoController.create);
router.put("/productos/:id", productoController.update);
router.delete("/productos/:id", productoController.remove);

module.exports = router;
