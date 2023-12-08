const Producto = require("../models/productoModel");

const getAll = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    const productos = await Producto.findAndCountAll({
      offset,
      limit: parseInt(limit),
    });

    res.json({
      success: true,
      data: productos.rows,
      totalItems: productos.count,
      currentPage: parseInt(page),
    });
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const producto = await Producto.findByPk(id);
    if (producto) {
      res.json(producto);
    } else {
      res.status(404).json({ error: "Producto no encontrado" });
    }
  } catch (error) {
    console.error("Error al obtener producto por ID:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const create = async (req, res) => {
  const { body } = req;
  try {
    const result = await Producto.create(body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const result = await Producto.update(body, {
      where: {
        idProducto: id,
      },
    });
    if (result[0] === 0) {
      res.status(404).json({ message: "Producto no encontrado" });
    } else {
      const updatedProduct = await Producto.findByPk(id);
      res.json(updatedProduct);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    // Marcar como eliminado lógico
    const updatedProduct = await Producto.update(
      { deleted: 1 },
      {
        where: {
          idProducto: id,
        },
      }
    );
    if (updatedProduct[0] === 0) {
      res.status(404).json({ message: "Producto no encontrado" });
    } else {
      res.json(updatedProduct);
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
