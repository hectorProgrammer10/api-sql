const Venta = require("../models/ventaModel");

const getAll = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    const ventas = await Venta.findAndCountAll({
      offset,
      limit: parseInt(limit),
    });

    res.json({
      success: true,
      data: ventas.rows,
      totalItems: ventas.count,
      currentPage: parseInt(page),
    });
  } catch (error) {
    console.error("Error al obtener ventas:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const venta = await Venta.findByPk(id);
    if (venta) {
      res.json(venta);
    } else {
      res.status(404).json({ error: "Venta no encontrada" });
    }
  } catch (error) {
    console.error("Error al obtener venta por ID:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const create = async (req, res) => {
  const { body } = req;
  try {
    const result = await Venta.create(body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const result = await Venta.update(body, {
      where: {
        idVenta: id,
      },
    });
    if (result[0] === 0) {
      res.status(404).json({ message: "Venta no encontrada" });
    } else {
      const updatedVenta = await Venta.findByPk(id);
      res.json(updatedVenta);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    // Marcar como eliminado lógico
    const updatedVenta = await Venta.update(
      { deleted: 1 },
      {
        where: {
          idVenta: id,
        },
      }
    );
    if (updatedVenta[0] === 0) {
      res.status(404).json({ message: "Venta no encontrada" });
    } else {
      res.json(updatedVenta);
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
