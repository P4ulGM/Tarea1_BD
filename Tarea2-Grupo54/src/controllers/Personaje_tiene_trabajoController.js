import prisma from '../prismaClient.js'

const createPersonaje_tiene_trabajo = async (req, res) => {
    const { id_trabajo, id_pesonaje, fecha_inicio, fecha_termino } = req.body

    let fecha_inicio_formateada = Date.parse(fecha_inicio)
    if (isNaN(fecha_inicio_formateada)) {
        return res.status(400).json({mensaje: "Fecha inicio mal formateada"})
    } 
    fecha_inicio_formateada = new Date(fecha_inicio_formateada)
    
    let fecha_termino_formateada
    if(fecha_termino) {
        fecha_termino_formateada = Date.parse(fecha_termino)
        if (isNaN(fecha_termino_formateada)) {
            return res.status(400).json({mensaje: "Fecha termino mal formateada"})
        } 
        fecha_termino_formateada = new Date(fecha_inicio_formateada)
    }

    
    const Personaje_tiene_trabajo = await prisma.personaje_tiene_trabajo.create({
        data: {
            id_trabajo,
            id_pesonaje,
            fecha_inicio: fecha_inicio_formateada,
            fecha_termino: fecha_termino_formateada
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
    const {fecha_inicio, fecha_termino } = req.body

    let fecha_inicio_formateada
    if (fecha_inicio) {
        fecha_inicio_formateada = Date.parse(fecha_inicio)
        if (isNaN(fecha_inicio_formateada)) {
            return res.status(400).json({mensaje: "Fecha inicio mal formateada"}) 
        }
        fecha_inicio_formateada = new Date(fecha_inicio_formateada)
    }

    let fecha_termino_formateada
    if (fecha_termino){
        fecha_termino_formateada = Date.parse(fecha_termino)
        if (isNaN(fecha_termino_formateada)) {
            return res.status(400).json({mensaje: "Fecha termino mal formateada"}) 
        }
        fecha_termino_formateada = new Date(fecha_termino_formateada)
    }

    const updatepersonaje_tiene_trabajo = await prisma.personaje_tiene_trabajo.update({
        where: { id_pesonaje_id_trabajo: {
            id_pesonaje: parseInt(req.params.id_pesonaje),
            id_trabajo: parseInt(req.params.id_trabajo)
        }},
        data: {
            fecha_inicio: fecha_inicio_formateada,
            fecha_termino: fecha_termino_formateada
        }
    })
    res.json(updatepersonaje_tiene_trabajo)
}


const deletePersonaje_tiene_trabajo = async (req, res) => {
    const deletepersonaje_tiene_trabajo = await prisma.personaje_tiene_trabajo.delete({
        where: {
            id_pesonaje_id_trabajo: {
                id_pesonaje: parseInt(req.params.id_pesonaje),
                id_trabajo: parseInt(req.params.id_trabajo)
            }
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