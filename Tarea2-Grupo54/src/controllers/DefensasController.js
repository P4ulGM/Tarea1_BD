import prisma from '../prismaClient.js'

const createDefensa = async (req, res) => {
    const { defensa , reinosids } = req.body
    

    if (!defensa) {
        return res.status(400).json({mensaje: "Defensa es obligatorio"})
    }

   if (
       typeof defensa !== "string") {
        return res.status(400).json({mensaje: "Error en tipo de Defensa"})
    }


    if(defensa.length > 45) {
        return res.status(400).json({mensaje: "Nombre de la defensa muy largo"})
    }

    try {
        let defense
        if (reinosids) {
            defense = await prisma.defensas.create({
                data: {
                    defensa,
                    reinos: {
                        connect: reinosids.map((idreino) => ({ id: idreino}))
                    },
                }
            })
        } else {
            defense = await prisma.defensas.create({
                data: {
                    defensa
                }
            })
        }
        res.json(defense)
    } catch {
        res.status(500).json({mensaje: "Error al crear la defensa"})
    }   
}

const getDefensas = async (req , res) => {
    const deffensa = await prisma.defensas.findMany({
        include: {reinos: true}
    })
    res.json(deffensa)
}

const getDefensaById = async (req, res) => {
    const { id } = req.params
    try{
        const defense = await prisma.defensas.findUniqueOrThrow({
            where: {
                id: Number(id)
            },
            include: {reinos: true}
        })
        res.json(defense) 
    } catch {
        res.status(404).json({mensaje: 'defensa no encontrada'})
    }
}

const updateDefensa = async (req, res) => {
    let { id } = req.params
    const { defensa , reinosids} = req.body

    if(!id) {
        return res.status(400).json({mensaje: "Se necesita un id para actualizar"})
    } else try {
        id = Number(id)
    } catch {
        return res.status(400).json({mensaje: "id debe de ser un número"})
    }


    try {
        let defense
        if (reinosids) {
            defense = await prisma.defensas.update({
                where: {id: id},
                data: {
                    defensa,
                    reinos: {
                        connect: map.reinosids((idreino) => ({ id: idreino}))
                    }
                }
            })
        } else {
            defense = await prisma.defensas.update({
                where: {id: id},
                data: {
                    defensa
                }
            });
        }
        res.status(200).json(defense);
    } catch {
        res.status(500).json({mensaje: "Error al actualizar defensa"})
    }
}

const deleteDefensa = async (req, res) => {
    const { id } = req.params
    try {
        const defense = await prisma.defensas.delete({
            where: {
                id: Number(id)
            }
        })
        res.status(200).json(defense)
    } catch  {
        res.status(500).json({mensaje: "Error al borrar defensa"})
    }
}
const DefensasController = {
    createDefensa,
    getDefensas,
    getDefensaById,
    updateDefensa,
    deleteDefensa
}

export default DefensasController