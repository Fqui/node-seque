const express = require('express');
const Router = require('./Routes/Router')
const { sequelize } = require('./models/index')

//inicializamos la app
const app = express();

//configuraciones
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//Rutas
app.use("/api/v1/", Router);

app.listen(PORT, () => {
    console.log("Server on port", PORT);
    sequelize.sync({force: false}).then(() => {
        console.log("Nos hemos conectado a la base de datos");
    })
})

