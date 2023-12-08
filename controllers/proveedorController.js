const Proveedor = require("../models/proveedorModel");

const getAll = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    const proveedores = await Proveedor.findAndCountAll({
      offset,
      limit: parseInt(limit),
    });

    res.json({
      success: true,
      data: proveedores.rows,
      totalItems: proveedores.count,
      currentPage: parseInt(page),
    });
  } catch (error) {
    console.error("Error al obtener proveedores:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const proveedor = await Proveedor.findByPk(id);
    if (proveedor) {
      res.json(proveedor);
    } else {
      res.status(404).json({ error: "Proveedor no encontrado" });
    }
  } catch (error) {
    console.error("Error al obtener proveedor por ID:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const create = async (req, res) => {
  const { body } = req;
  try {
    const result = await Proveedor.create(body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const result = await Proveedor.update(body, {
      where: {
        idProveedor: id,
      },
    });
    if (result[0] === 0) {
      res.status(404).json({ message: "Proveedor no encontrado" });
    } else {
      const updatedProveedor = await Proveedor.findByPk(id);
      res.json(updatedProveedor);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    // Marcar como eliminado lógico
    const updatedProveedor = await Proveedor.update(
      { deleted: 1 },
      {
        where: {
          idProveedor: id,
        },
      }
    );
    if (updatedProveedor[0] === 0) {
      res.status(404).json({ message: "Proveedor no encontrado" });
    } else {
      res.json(updatedProveedor);
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
