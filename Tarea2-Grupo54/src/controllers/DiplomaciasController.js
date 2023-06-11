import prisma from '../prismaClient.js'

const createDiplomacias = async (req, res) => {
    const { id_reino_1, id_reino_2, es_aliado } = req.body

    if (!id_reino_1 || !id_reino_2 || !es_aliado) {
        return res.status(400).json({mensaje: "id_reino_1, id_reino_2 y es_aliado son obligatorias"})
    }

   if (
       typeof id_reino_1 !== "number" ||
       typeof id_reino_2 !== "number" ||
       typeof es_aliado  !== "boolean") {
        return res.status(400).json({mensaje: "Error en tipo de id_reino_1, id_reino_2 o es_aliado"})
    }


    // Si es_aliado es booleano no es necesario
// if(es_aliado !== true || false) {
//     return res.status(400).json({mensaje: "Valor erroneo"})
// }

    try {
        const Diplomacias = await prisma.diplomacias.create({
            data: {
                id_reino_1, 
                id_reino_2, 
                es_aliado
            }
        })
        res.json(Diplomacias)
    } catch {
        res.status(500).json({mensaje: "Error al crear diplomacia"})
    }
}


const getDiplomacias = async (req , res) => {
    const Diplomacias = await prisma.diplomacias.findMany()
    res.json(Diplomacias)
}

const getDiplomaciasById = async (req, res) => {
    const { id_reino } = req.params
    try{
        const Diplomacias = await prisma.diplomacias.findMany({
            where: {
                OR: [
                  {
                      id_reino_1: Number(id_reino),
                  },
                  {
                      id_reino_2: Number(id_reino)
                  }
                ]
              }
            })
        res.json(Diplomacias) 
    } catch {
        res.status(404).json({mensaje: 'diplomacias del reino no encontrado'})
    }
}


const updateDiplomacias = async (req, res) => {
    let { id_reino_1, id_reino_2 } = req.params
    const { es_aliado } = req.body

    if(!id_reino_1 || !id_reino_2) {
        return res.status(400).json({mensaje: "Se necesita un id para actualizar"})
    } 
        
    id_reino_1 = Number(id_reino_1) // Number() no tira error
    id_reino_2 = Number(id_reino_2)

    if (isNaN(id_reino_1) || isNaN(id_reino_2)) {
        return res.status(400).json({mensaje: "El id debe de ser un número"})
    }

    const DatosActualizados = {
        es_aliado
    }

    try {
        const updatediplomacias = await prisma.diplomacias.updateMany({
            where: {
                id_reino_1: parseInt(req.params.id_reino_1),
                id_reino_2: parseInt(req.params.id_reino_2)},
                data: DatosActualizados
        });
        res.status(200).json(updatediplomacias);
    } catch {
        res.status(500).json({mensaje: "Error al actualizar diplomacia"})
    }
}

const deleteDiplomacias = async (req, res) => {
    const { id_reino1, id_reino2 } = req.params
    try {
        const deletediplomacias = await prisma.diplomacias.deleteMany({
            where: {
                AND: [
                  {
                      id_reino_1: Number(id_reino1),
                  },
                  {
                      id_reino_2: Number(id_reino2)
                  }
                ]
              }
        })
        res.status(200).json(deletediplomacias)
    } catch  {
        res.status(500).json({mensaje: "Error al borrar diplomacia"})
    }
}



const DiplomaciasController = {
    getDiplomacias,
    createDiplomacias,
    getDiplomaciasById,
    updateDiplomacias,
    deleteDiplomacias
}

export default DiplomaciasController