//Importar el modelo como se exportó en el archivo user.js
const Users = require('./user.js');

findAllUsers = async () => {
    return await Users.find();
}

saveUser = async (userData) => {
    const user = new Users(userData);
    return await user.save();
}

findUserById = async (userId) => {
    if (!userId) throw new Error('Missing fields');
    return await Users.findById(userId);
}

updateUserById = async (userId, updateUserData) => {
    if (!userId) throw new Error('Missing fields');
    return await Users.findByIdAndUpdate(userId, updateUserData, { new: true });
}

module.exports = {
    findAllUsers,
    saveUser,
    findUserById,
    updateUserById,
};