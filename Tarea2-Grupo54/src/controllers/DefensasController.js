import prisma from '../prismaClient.js'

const createDefensa = async (req, res) => {
    const { defensa } = req.body
    const deffensa = await prisma.defensas.create({
        data: {
            defensa
        }
    })
    res.json(deffensa)
}

const getDefensas = async (req , res) => {
    const deffensa = await prisma.defensas.findMany()
    res.json(deffensa)
}

const getDefensaById = async (req, res) => {
    const { id } = req.params
    const deffensa = await prisma.defensas.findUnique({
        where: {
            id: Number(id)
        }
    })
    if (!deffensa)
        return res.status(404).json({error: "Kart not found"});
    res.json(deffensa)
}

const updateDefensa = async (req, res) => {
    const { id } = req.params
    const updatedeffensa = await prisma.defensas.update({
        where: {
            id: Number(id)
        },
        data: req.body
    })
    res.json(updatedeffensa)
}

const deleteDefensa = async (req, res) => {
    const { id } = req.params
    const deletedeffensa = await prisma.defensas.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(deletedeffensa)
}
const DefensasController = {
    createDefensa,
    getDefensas,
    getDefensaById,
    updateDefensa,
    deleteDefensa
}

export default DefensasController