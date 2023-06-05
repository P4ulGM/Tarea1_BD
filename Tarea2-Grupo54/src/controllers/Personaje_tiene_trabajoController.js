import prisma from '../prismaClient.js'

const createPersonaje_tiene_trabajo = async (req, res) => {
    const { id_trabajo, id_pesonaje, fecha_inicio, fecha_termino } = req.body
    const Personaje_tiene_trabajo = await prisma.personaje_tiene_trabajo.create({
        data: {
            id_trabajo,
            id_pesonaje,
            fecha_inicio,
            fecha_termino
        }
    })
    res.json(Personaje_tiene_trabajo)
}

const getPersonaje_tiene_trabajo = async (req , res) => {
    const Personaje_tiene_trabajo = await prisma.personaje_tiene_trabajo.findMany()
    res.json(Personaje_tiene_trabajo)
}

const getPersonaje_tiene_trabajoById = async (req, res) => {
    const trabajos_del_personaje = await prisma.personaje_tiene_trabajo.findMany({
        where: {
            id_pesonaje: parseInt(req.params.id_pesonaje)
        }
    })
    return res.json(trabajos_del_personaje)
}

const updatePersonaje_tiene_trabajo = async (req, res) => {
    const updatepersonaje_tiene_trabajo = await prisma.personaje_tiene_trabajo.updateMany({
        where: {
            id_pesonaje: parseInt(req.params.id_pesonaje),
            id_trabajo: parseInt(req.params.id_trabajo)
        },
        data: req.body
    })
    res.json(updatepersonaje_tiene_trabajo)
}


const deletePersonaje_tiene_trabajo = async (req, res) => {
    const deletepersonaje_tiene_trabajo = await prisma.personaje_tiene_trabajo.deleteMany({
        where: {
            id_pesonaje: parseInt(req.params.id_pesonaje),
            id_trabajo: parseInt(req.params.id_trabajo)
        }
    })
    res.json(deletepersonaje_tiene_trabajo)
}

const Personaje_tiene_trabajoController = {
    getPersonaje_tiene_trabajo,
    getPersonaje_tiene_trabajoById,
    createPersonaje_tiene_trabajo,
    updatePersonaje_tiene_trabajo,
    deletePersonaje_tiene_trabajo
}

export default Personaje_tiene_trabajoController