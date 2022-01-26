const db = require("../../models/index");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secrets = "mi_secreto";

module.exports = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await db.User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      res.status(404).json({ msg: "Usuario con este correo no encontrado" });
    } else {
      if (bcrypt.compareSync(password, user.contraseña)) {
        // Creamos el token
        let token = jwt.sign({ id: user.id, email: user.email }, secrets, {
          expiresIn: "24hr",
        });

        res.json({
          email: user.email,
          token: token,
        });
      } else {
        // Unauthorized Access
        res.status(401).json({ msg: "Contraseña incorrecta" });
      }
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
