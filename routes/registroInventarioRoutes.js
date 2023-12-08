// routes/registroInventarioRoutes.js
const express = require("express");
const router = express.Router();
const registroInventarioController = require("../controllers/registroInventarioController");

// Rutas para el registro de inventario
router.get("/registro-inventario", registroInventarioController.getAll);
router.get("/registro-inventario/:id", registroInventarioController.getById);
router.post("/registro-inventario", registroInventarioController.create);
router.put("/registro-inventario/:id", registroInventarioController.update);
router.delete("/registro-inventario/:id", registroInventarioController.remove);

module.exports = router;
