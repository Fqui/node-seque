const db = require('../../models/index');

module.exports = async (req, res) => {
    const {titulo, descripcion} = req.body;
    const userID = req.user.id

    try {
        const task = await db.Task.create({
            titulo,
            descripcion,
            userID
        })
        res.json({msg: "tarea creada", tarea: task})
    } catch (error) {
        console.error(error)
        res.json({msg: "ups", error})
    }
}