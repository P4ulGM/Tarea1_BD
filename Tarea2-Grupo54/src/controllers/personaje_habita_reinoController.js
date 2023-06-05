import prisma from '../prismaClient.js'

const createPersonaje_habita_reino = async (req, res) => {
    const { id_personaje, id_reino, fecha_registro, es_gobernante } = req.body
    const Personaje_habita_reino = await prisma.personaje_habita_reino.create({
        data: {
            id_personaje,
            id_reino,
            fecha_registro, 
            es_gobernante
        }
    })
    res.json(Personaje_habita_reino)
}

const getPersonaje_habita_reino = async (req , res) => {
    const Personaje_habita_reino = await prisma.personaje_habita_reino.findMany()
    res.json(Personaje_habita_reino)
}

const getPersonaje_habita_reinoById = async (req, res) => {
    const Personaje_habita_reino = await prisma.personaje_habita_reino.findMany({
        where: {
            id_reino: parseInt(req.params.id_reino)
        }
    })
    return res.json(Personaje_habita_reino)
}

const updatePersonaje_habita_reino = async (req, res) => {
    const updatepersonaje_habita_reino = await prisma.personaje_habita_reino.updateMany({
        where: {
            id_personaje: parseInt(req.params.id_personaje),
            id_reino: parseInt(req.params.id_reino)
        },
        data: req.body
    })
    res.json(updatepersonaje_habita_reino)
}

const deletePersonaje_habita_reino = async (req, res) => {
    const deletepersonaje_habita_reino = await prisma.personaje_habita_reino.deleteMany({
        where: {
            id_personaje: parseInt(req.params.id_personaje),
            id_reino: parseInt(req.params.id_reino)
        }
    })
    res.json(deletepersonaje_habita_reino)
}

const Personaje_habita_reinoContoller = {
    createPersonaje_habita_reino,
    getPersonaje_habita_reino,
    getPersonaje_habita_reinoById,
    updatePersonaje_habita_reino,
    deletePersonaje_habita_reino
}

export default Personaje_habita_reinoContoller