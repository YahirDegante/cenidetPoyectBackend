const {Router, response} = require('express');
const ResearchLine = require('./researchLines.js'); 

//Traer todas las líneas de investigación
async function getResearchLines(req, res = response) {
    try {
        const researchLines = await ResearchLine.find();
        res.json(researchLines);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener las líneas de investigación' });
    }
}

//Crear una línea de investigación
async function createResearchLine(req, res = response) {
    try {
        const researchLine = new ResearchLine(req.body);
        await researchLine.save();
        res.status(201).json({ message: 'Línea de investigación creada correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al crear la línea de investigación' });
    }
}

//Traer una linea de investigación por id
async function getResearchLineById(req, res = response) {
    try{
        const researchLineId = req.params.id;
        const researchLine = await ResearchLine.findById(researchLineId);

        if(!researchLine){
            return res.status(404).json({message: 'Línea de investigación no encontrada'});
        }
        res.json(researchLine);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Error al obtener la línea de investigación'});
    }
}

//Actualizar una línea de investigación por id
const updateResearchLine = async (req, res = response) => {
    try {
        const researchLineId = req.params.id;
        const updateResearchLineData = req.body;
        const researchLine = await ResearchLine.findByIdAndUpdate(researchLineId, updateResearchLineData, { new: true });

        if(!researchLine){
            return res.status(404).json({message: 'Línea de investigación no encontrada'}); 
        }
        res.json({message: 'Línea de investigación actualizada correctamente'});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Error al actualizar la línea de investigación'});
    }
};

//Eliminar una línea de investigación por id
const deleteResearchLine = async (req, res = response) => {
    try {
        const researchLineId = req.params.id;
        const researchLine = await ResearchLine.findByIdAndDelete(researchLineId);
        
        if(!researchLine){
            return res.status(404).json({message: 'Línea de investigación no encontrada'});
        }
        res.json({message: 'Línea de investigación eliminada correctamente'});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Error al eliminar la línea de investigación'});
    }
};

const researchLineRouter = Router();
researchLineRouter.get('/', getResearchLines);
researchLineRouter.post('/', createResearchLine);
researchLineRouter.get('/:id', getResearchLineById);
researchLineRouter.put('/:id', updateResearchLine);
researchLineRouter.delete('/:id', deleteResearchLine);

module.exports = {
    researchLineRouter,
};