const authController = require('../Controller/Auth/index')

//Asignamos los endpoints de las rutas USUARIO

const User = (Router) => {
    Router.post("/signUp", authController.signUp );
    Router.post("/login", authController.login );
};

module.exports = User;