const db = require("../../models/index");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  const { nombre, apellido, email, contraseña } = req.body;

  //hasheamos la contraseña
  const password = bcrypt.hashSync(contraseña, 10);

  try {
    const user = await db.User.create({
      nombre,
      apellido,
      email,
      contraseña: password,
    });

    //creamos el token
    res.json({
      message: "se creo un nuevo usuario",
      usuario: { email: user.email },
    });
  } catch (error) {
    console.error(error);
    res.json({ message: "Ups", error });
  }
};
