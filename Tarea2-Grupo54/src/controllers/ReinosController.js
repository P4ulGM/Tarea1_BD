import prisma from '../prismaClient.js'

const createReino = async (req, res) => {
    const { nombre, ubicacion, superficie } = req.body
    const reino = await prisma.reinos.create({
        data: {
            nombre,
            ubicacion,
            superficie
        }
    })
    res.json(reino)
}

const getReinos = async (req , res) => {
    const reino = await prisma.reinos.findMany()
    res.json(reino)
}

const getReinoById = async (req, res) => {
    const { id } = req.params
    const reino = await prisma.reinos.findUnique({
        where: {
            id: Number(id)
        }
    })
    if (!reino)
        return res.status(404).json({error: "Kingdom not found"});
    res.json(reino)
}

const updateReino = async (req, res) => {
    const { id } = req.params
    const updatereino = await prisma.reinos.update({
        where: {
            id: Number(id)
        },
        data: req.body
    })
    res.json(updatereino)
}

const deleteReino = async (req, res) => {
    const { id } = req.params
    const deletereino = await prisma.reinos.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(deletereino)
}

const ReinosController = {
    createReino,
    getReinos,
    getReinoById,
    updateReino,
    deleteReino
}



export default ReinosController