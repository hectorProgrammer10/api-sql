const RegistroInventario = require("../models/registroInventarioModel");

const getAll = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    const registros = await RegistroInventario.findAndCountAll({
      offset,
      limit: parseInt(limit),
    });

    res.json({
      success: true,
      data: registros.rows,
      totalItems: registros.count,
      currentPage: parseInt(page),
    });
  } catch (error) {
    console.error("Error al obtener registros de inventario:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const registro = await RegistroInventario.findByPk(id);
    if (registro) {
      res.json(registro);
    } else {
      res.status(404).json({ error: "Registro de inventario no encontrado" });
    }
  } catch (error) {
    console.error("Error al obtener registro de inventario por ID:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const create = async (req, res) => {
  const { body } = req;
  try {
    const result = await RegistroInventario.create(body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const result = await RegistroInventario.update(body, {
      where: {
        idRegistro: id,
      },
    });
    if (result[0] === 0) {
      res.status(404).json({ message: "Registro de inventario no encontrado" });
    } else {
      const updatedRegistro = await RegistroInventario.findByPk(id);
      res.json(updatedRegistro);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    // Marcar como eliminado lógico
    const updatedRegistro = await RegistroInventario.update(
      { deleted: 1 },
      {
        where: {
          idRegistro: id,
        },
      }
    );
    if (updatedRegistro[0] === 0) {
      res.status(404).json({ message: "Registro de inventario no encontrado" });
    } else {
      res.json(updatedRegistro);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
