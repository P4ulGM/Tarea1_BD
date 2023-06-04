import prisma from '../prismaClient.js'

const createTrabajo = async (req, res) => {
    const { descripcion, sueldo } = req.body
    const trabajo = await prisma.trabajos.create({
        data: {
            descripcion,
            sueldo
        }
    })
    res.json(trabajo)
}

const getTrabajos = async (req , res) => {
    const trabajo = await prisma.trabajos.findMany()
    res.json(trabajo)
}

const getTrabajoById = async (req, res) => {
    const { id } = req.params
    const trabajo = await prisma.trabajos.findUnique({
        where: {
            id: Number(id)
        }
    })
    if (!trabajo)
        return res.status(404).json({error: "job not found"});
    res.json(trabajo)
}

const updateTrabajo = async (req, res) => {
    const { id } = req.params
    const updatetrabajo = await prisma.trabajos.update({
        where: {
            id: Number(id)
        },
        data: req.body
    })
    res.json(updatetrabajo)
}

const deleteTrabajo = async (req, res) => {
    const { id } = req.params
    const deletetrabajo = await prisma.trabajos.delete({
        where: {
            id: Number(id)
        }
    })
    if (!deletetrabajo)
        return res.status(404).json({error: "job not found"});
    res.json(deletetrabajo)
}




const TrabajosController = {
    createTrabajo,
    getTrabajos,
    getTrabajoById,
    updateTrabajo,
    deleteTrabajo
}

export default TrabajosController