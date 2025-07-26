const prisma = require('../models/db');

exports.createPlace = async (req, res) => {
  const { code, name, description } = req.body;
  try {
    const place = await prisma.place.create({
      data: { code, name, description }
    });
    res.status(201).json(place);
  } catch (err) {
    res.status(400).json({ error: 'Lugar duplicado o error' });
  }
};
