import prisma from '../prismaClient.js'

const createReino = async (req, res) => {
    const { nombre, ubicacion, superficie } = req.body

    if (!nombre || !ubicacion || !superficie) {
        return res.status(400).json({mensaje: "Nombre, Ubicacion y Superficie son obligatorias"})
    }

   if (
       typeof nombre !== "string" ||
       typeof ubicacion !== "string" ||
       typeof superficie  !== "number") {
        return res.status(400).json({mensaje: "Error en tipo de Nombre, Ubicacion o Superficie"})
    }


    if(nombre.length > 45) {
        return res.status(400).json({mensaje: " Nombre del reino muy largo"})
    }

    if(ubicacion.length > 45) {
        return res.status(400).json({mensaje: " Nombre de la ubicacion muy largo"})
    }

    try {
        const reino = await prisma.reinos.create({
            data: {
                nombre,
                ubicacion,
                superficie
            }
        })
        res.json(reino)
    } catch {
        res.status(500).json({mensaje: "Error al crear el reino"})
    }
}

const getReinos = async (req , res) => {
    const reino = await prisma.reinos.findMany()
    res.json(reino)
}

const getReinoById = async (req, res) => {
    const { id } = req.params
    try {
        const reino = await prisma.reinos.findUniqueOrThrow({
            where: {
            id: Number(id)
            }
        })
        res.json(reino) 
    } catch {
        res.status(404).json({error: "Reino no encontrado"});
    }
}

const updateReino = async (req, res) => {
    let { id } = req.params
    const { nombre, ubicacion, superficie } = req.body

    if(!id) {
        return res.status(400).json({mensaje: "Se necesita un id para actualizar"})
    }
    id = Number(id)

    const DatosActualizados = {
        nombre,
        ubicacion,
        superficie
    }

  
    try {
        const reino = await prisma.reinos.update({
            where: {id: id},
            data: DatosActualizados
        });
        res.status(200).json(reino);
    } catch {
        res.status(500).json({mensaje: "Error al actualizar reino"})
    }

}

//No deja eliminar reino con id existente
const deleteReino = async (req, res) => {
    const { id } = req.params
    try {
        const deletereino = await prisma.reinos.delete({
            where: {
                id: Number(id)
            }
        });
        res.json(deletereino)
    } catch {
        res.status(500).json({mensaje: "Error al eliminar kart"})
    }

    
}

const ReinosController = {
    createReino,
    getReinos,
    getReinoById,
    updateReino,
    deleteReino
}



export default ReinosController
