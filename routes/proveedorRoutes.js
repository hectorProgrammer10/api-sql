// routes/proveedorRoutes.js
const express = require("express");
const router = express.Router();
const proveedorController = require("../controllers/proveedorController");

// Rutas para proveedores
router.get("/proveedores", proveedorController.getAll);
router.get("/proveedores/:id", proveedorController.getById);
router.post("/proveedores", proveedorController.create);
router.put("/proveedores/:id", proveedorController.update);
router.delete("/proveedores/:id", proveedorController.remove);

module.exports = router;
