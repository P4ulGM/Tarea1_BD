import prisma from '../prismaClient.js'

const createKart = async (req, res) => {
    const { modelo, color, velocidad_maxima, id_personaje } = req.body
    
    if (!modelo || !color || !velocidad_maxima || !id_personaje){
        return res.status(400).json({mensaje: "Modelo, Color, Velocidad maxima y Id_personaje son obligatorias"})
    }

    if (
        typeof modelo !== "string" ||
        typeof color !== "string" ||
        typeof velocidad_maxima !== "number" ||
        typeof id_personaje  !== "number") {
        return res.status(400).json({mensaje: "Error en tipo de Modelo, Color, Velocidad maxima o Id_personaje"})
    }

    if(modelo.length > 45) {
        return res.status(400).json({mensaje: " Nombre del Modelo muy largo"})
    }

    if(color.length > 45) {
        return res.status(400).json({mensaje: " Nombre del Color muy largo"})
    }

    try {
        const kart = await prisma.karts.create({
            data: {
                modelo,
                color,
                velocidad_maxima,
                id_personaje
            }
        })
        res.json(kart)
    } catch {
        res.status(500).json({mensaje: "Error al crear el kart"})
    }
}

const getKarts = async (req , res) => {
    const kart = await prisma.karts.findMany()
    res.json(kart)
}

const getKartById = async (req, res) => {
    const { id } = req.params
    try{
        const kart = await prisma.karts.findUniqueOrThrow({
            where: {
                id: Number(id)
            }
        })
        res.json(kart)  
     } catch { 
        res.status(404).json({mensaje: "Kart no encontrado"});
     }
}

const updateKart = async (req, res) => {
    let { id } = req.params
    const { modelo, color, velocidad_maxima } = req.body
    if(!id) {
        return res.status(400).json({mensaje: "Se necesita un id para actualizar"})
    } else try {
        id = Number(id)
    } catch {
        return res.status(400).json({mensaje: "id debe de ser un número"})
    }
    const DatosActalizados = {
        modelo, 
        color, 
        velocidad_maxima
    }

    try {
        const kart = await prisma.karts.update({
            where: {id: id},
            data: DatosActalizados
        });
        res.status(200).json(kart);
    } catch {
        res.status(500).json({mensaje: "Error al actualizar kart"})
    }
}

const deleteKart = async (req, res) => {
    const { id } = req.params
    try {
        const deletekart = await prisma.karts.delete({
            where: {
                id: Number(id)
            }
        })
        res.json(deletekart)
    } catch {
        res.status(500).json({mensaje: "Error al borrar kart"})
    }

    
}


const KartsController = {
    createKart,
    getKarts,
    getKartById,
    updateKart,
    deleteKart
}

export default KartsController
