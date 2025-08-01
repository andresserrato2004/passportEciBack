const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const visitRoutes = require('./routes/visitRoutes');
const placeRoutes = require('./routes/placeRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors()); // Esto permite todos los orígenes por defecto
app.use(express.json());

// Rutas
app.use('/auth', authRoutes);          // /auth/register, /auth/login
app.use('/places', placeRoutes);       // /places (POST para registrar nuevos lugares)
app.use('/passport', visitRoutes);     // /passport (GET), /passport/visit (POST)

// Ruta raíz (opcional)
app.get('/', (req, res) => {
  res.send('Pasaporte Digital API funcionando ✅');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
