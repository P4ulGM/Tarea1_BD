import prisma from '../prismaClient.js'

const createKarts = async (req, res) => {
    const { modelo, color, velocidad_maxima, id_personaje } = req.body
    const kart = await prisma.karts.create({
        data: {
            modelo,
            color,
            velocidad_maxima,
            id_personaje
        }
    })
    res.json(kart)
}

const getKarts = async (req , res) => {
    const kart = await prisma.karts.findMany()
    res.json(kart)
}

const getKartById = async (req, res) => {
    const { id } = req.params
    const kart = await prisma.karts.findUnique({
        where: {
            id: Number(id)
        }
    })
    if (!kart)
        return res.status(404).json({error: "User not found"});
    res.json(kart)
}

const updateKart = async (req, res) => {
    const { id } = req.params
    const updatekart = await prisma.karts.update({
        where: {
            id: Number(id)
        },
        data: req.body
    })
    res.json(updatekart)
}

const deleteKart = async (req, res) => {
    const { id } = req.params
    const deletekart = await prisma.karts.delete({
        where: {
            id: Number(id)
        }
    })
    if (!deletekart)
        return res.status(404).json({error: "User not found"});
    res.json(deletekart)
}


const KartsController = {
    createKarts,
    getKarts,
    getKartById,
    updateKart,
    deleteKart
}

export default KartsController