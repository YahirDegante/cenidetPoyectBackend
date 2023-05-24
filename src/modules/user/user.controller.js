//2. Crear el controlador
const { Router, Response } = require('express');
//Importar el modelo como se exportó en el archivo user.js
const Users = require('./user.js');

const getStudents = async (req, res = Response) => {
    try {
        const users = await Users.find();
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

const userRouter = Router();

//2.1 Crear la ruta
userRouter.get('/', [], getStudents);

//3. Crear el archivo de rutas
module.exports = {
    userRouter,
}