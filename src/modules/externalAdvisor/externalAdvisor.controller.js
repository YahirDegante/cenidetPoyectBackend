const {Router, response} = require('express');
const ExternalAdvisor = require('./externalAdvisor.js');

//Traer todos los asesores externos
async function getExternalAdvisors(req, res = response) {
    try {
        const externalAdvisors = await ExternalAdvisor.find();
        res.json(externalAdvisors);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener los asesores externos' });
    }
};

//Crear un asesor externo
async function createExternalAdvisor(req, res = response) {
    try {
        const externalAdvisor = new ExternalAdvisor(req.body);
        await externalAdvisor.save();
        res.status(201).json({ message: 'Asesor externo creado correctamente' });
    }
    catch (error) {
        conosl.log(error);
        res.status(500).json({ error: 'Error al crear el asesor externo' });
    }
};

const externalAdvisorRouter = Router();
externalAdvisorRouter.get('/', getExternalAdvisors);
externalAdvisorRouter.post('/', createExternalAdvisor);

module.exports = {
    externalAdvisorRouter,
};