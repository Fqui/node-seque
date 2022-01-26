const taskController = require('../Controller/Task/index')
const auth = require('../middlewares/auth')

//asignamos los endpoints de las rutas TAREAS

const Task = (Router) => {
    Router.post("/createTask", auth, taskController.Create);
    Router.get("/tasks", auth, taskController.findAll);
}


module.exports = Task;