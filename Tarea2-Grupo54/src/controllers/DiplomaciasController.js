import prisma from '../prismaClient.js'

const createDiplomacias = async (req, res) => {
    const { id_reino_1, id_reino_2, es_aliado } = req.body
    const Diplomacias = await prisma.diplomacias.create({
        data: {
            id_reino_1, 
            id_reino_2, 
            es_aliado
        }
    })
    res.json(Diplomacias)
}


const getDiplomacias = async (req , res) => {
    const Diplomacias = await prisma.diplomacias.findMany()
    res.json(Diplomacias)
}

const getDiplomaciasById = async (req, res) => {
    const Diplomacias = await prisma.diplomacias.findMany({
        where: {
            id_reino_1: parseInt(req.params.id_reino_1)
        }
    })
    return res.json(Diplomacias)
}

const updateDiplomacias = async (req, res) => {
    const updatediplomacias = await prisma.diplomacias.updateMany({
        where: {
            id_reino_1: parseInt(req.params.id_reino_1),
            id_reino_2: parseInt(req.params.id_reino_2)
        },
        data: req.body
    })
    res.json(updatediplomacias)
}

const deleteDiplomacias = async (req, res) => {
    const deletediplomacias = await prisma.diplomacias.deleteMany({
        where: {
            id_reino_1: parseInt(req.params.id_reino_1),
            id_reino_2: parseInt(req.params.id_reino_2)
        }
    })
    res.json(deletediplomacias)
}


const DiplomaciasController = {
    getDiplomacias,
    createDiplomacias,
    getDiplomaciasById,
    updateDiplomacias,
    deleteDiplomacias
}

export default DiplomaciasController