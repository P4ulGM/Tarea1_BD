import prisma from '../prismaClient.js'

const createTrabajo = async (req, res) => {
    const { descripcion, sueldo } = req.body

    if (!descripcion || !sueldo ) {
        return res.status(400).json({mensaje: "Descripcion y Sueldo son obligatorias"})
    }

   if (
       typeof descripcion !== "string" ||
       typeof sueldo !== "number") {
        return res.status(400).json({mensaje: "Error en tipo de Descripcion o Sueldo"})
    }


    if(descripcion.length > 45) {
        return res.status(400).json({mensaje: "Descripcion muy larga"})
    }

    try {
        const trabajo = await prisma.trabajos.create({
            data: {
                descripcion,
                sueldo
            }
        })
        res.json(trabajo)
    } catch {
        res.status(500).json({mensaje: "Error al crear trabajo"})
    }
}

const getTrabajos = async (req , res) => {
    const trabajo = await prisma.trabajos.findMany()
    res.json(trabajo)
}

const getTrabajoById = async (req, res) => {
    const { id } = req.params
    try{
        const trabajo = await prisma.trabajos.findUniqueOrThrow({
            where: {
                id: Number(id)
            }
        })
        res.json(trabajo) 
    } catch {
        res.status(404).json({mensaje: 'trabajo no encontrado'})
    }
}

const updateTrabajo = async (req, res) => {
    let { id } = req.params
    const { descripcion, sueldo } = req.body

    if(!id) {
        return res.status(400).json({mensaje: "Se necesita un id para actualizar"})
    }
    
    id = Number(id)
 

    const DatosAcutalizados = {
        descripcion,
        sueldo
    }

    try {
        const trabajo = await prisma.trabajos.update({
            where: {id: id},
            data: DatosAcutalizados
        });
        res.status(200).json(trabajo);
    } catch {
        res.status(500).json({mensaje: "Error al acutalizar trabajo"})
    }

}

//No borra trabajo que tenga "trabajadores" 
const deleteTrabajo = async (req, res) => {
    const { id } = req.params
    try {
        const deletetrabajo = await prisma.trabajos.delete({
            where: {
                id: Number(id)
            }
        })
        res.status(200).json(deletetrabajo)
    } catch  {
        res.status(500).json({mensaje: "Error al borrar trabajo"})
    }
}




const TrabajosController = {
    createTrabajo,
    getTrabajos,
    getTrabajoById,
    updateTrabajo,
    deleteTrabajo
}

export default TrabajosController