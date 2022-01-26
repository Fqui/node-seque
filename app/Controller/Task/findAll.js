const db = require('../../models/index');

module.exports = async (req, res) => {

    const userID = req.user.id

    try {
        const tasks = await db.Task.findAll({where: {userID}})
        console.log(tasks)
        res.json({msg: "estas son las tareas", tareas: tasks})
    } catch (error) {
        console.log(error)
        res.json({msg: "Ups", erorr: error})
    }
    
}