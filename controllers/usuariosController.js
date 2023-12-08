const Usuario = require("../models/usuariosModel");

const getAll = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    const usuarios = await Usuario.findAndCountAll({
      offset,
      limit: parseInt(limit),
    });

    res.json({
      success: true,
      data: usuarios.rows,
      totalItems: usuarios.count,
      currentPage: parseInt(page),
    });
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error("Error al obtener usuario por ID:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const create = async (req, res) => {
  const { body } = req;
  try {
    const result = await Usuario.create(body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const result = await Usuario.update(body, {
      where: {
        idUsuario: id,
      },
    });
    if (result[0] === 0) {
      res.status(404).json({ message: "Usuario no encontrado" });
    } else {
      const updatedUsuario = await Usuario.findByPk(id);
      res.json(updatedUsuario);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    // Marcar como eliminado lógico
    const updatedUsuario = await Usuario.update(
      { deleted: 1 },
      {
        where: {
          idUsuario: id,
        },
      }
    );
    if (updatedUsuario[0] === 0) {
      res.status(404).json({ message: "Usuario no encontrado" });
    } else {
      res.json(updatedUsuario);
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
