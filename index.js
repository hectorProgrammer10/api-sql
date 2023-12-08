// index.js
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/db");
const app = express();
const PORT = process.env.PORT || 3000;

// Configuración del middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Conexión a la base de datos
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Modelos sincronizados con la base de datos.");
  })
  .catch((err) => {
    console.error("Error al sincronizar modelos con la base de datos:", err);
  });

// Rutas
const proveedorRoutes = require("./routes/proveedorRoutes");
const productoRoutes = require("./routes/productoRoutes");
const usuariosRoutes = require("./routes/usuariosRoutes");
const ventaRoutes = require("./routes/ventaRoutes");
const registroInventarioRoutes = require("./routes/registroInventarioRoutes");

// Agrupar rutas utilizando express.Router()
const routes = express.Router();
routes.use("/proveedor", proveedorRoutes);
routes.use("/producto", productoRoutes);
routes.use("/usuarios", usuariosRoutes);
routes.use("/venta", ventaRoutes);
routes.use("/registroInventario", registroInventarioRoutes);

app.use(routes);

// Manejo centralizado de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
