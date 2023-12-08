// routes/usuariosRoutes.js
const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuariosController");

// Rutas para usuarios
router.get("/usuarios", usuariosController.getAll);
router.get("/usuarios/:id", usuariosController.getById);
router.post("/usuarios", usuariosController.create);
router.put("/usuarios/:id", usuariosController.update);
router.delete("/usuarios/:id", usuariosController.remove);

module.exports = router;
