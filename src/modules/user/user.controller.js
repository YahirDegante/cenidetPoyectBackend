//2. Crear el controlador
const { Router, Response } = require('express');
//Importar el modelo como se exportó en el archivo user.js
const Users = require('./user.js');

//Traer todos los usuarios
async function getUsers(req, res = Response) {
    try {
        const users = await Users.find();
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
}

//Crear un usuario
const createUser = async (req, res = Response) => {
    try {
        const user = new Users(req.body);
        await user.save();
        res.status(201).json({ message: 'Usuario creado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
};

//Obtener un usuario por id
const getUserById = async (req, res = Response) => {
    try {
        const userId = req.params.id;
        const user = await Users.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
};

//Actualizar un usuario por id
const updateUser = async (req, res = Response) => {
    try {
        const userId = req.params.id;
        const updateUserData = req.body;
        const user = await Users.findByIdAndUpdate(userId, updateUserData, { new: true });

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(user,{ message: 'Usuario actualizado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
};

//Eliminar un usuario por id
const deleteUser = async (req, res = Response) => {
    try {
        const userId = req.params.id;
        const user = await Users.findByIdAndDelete(userId);

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
};

//Obtener un usuario por role
const getUserByRole = async (req, res = Response) => {
    try {
        const userRole = req.params.role;
        const user = await Users.find({role: userRole});

        if (user.length == 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
};

const userRouter = Router();

//Rutas que se an utilizado hasta el momento
userRouter.get('/', getUsers);
userRouter.post('/', createUser);
userRouter.get('/:id', getUserById);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);
userRouter.get('/role/:role', getUserByRole);

//2.1 Crear la ruta
//userRouter.get('/', [], getStudents);

//3. Crear el archivo de rutas
module.exports = {
    userRouter,
}