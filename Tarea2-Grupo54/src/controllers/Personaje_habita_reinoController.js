import prisma from '../prismaClient.js'

const createPersonaje_habita_reino = async (req, res) => {
    const { id_personaje, id_reino, es_gobernante } = req.body

    if (!id_personaje || !id_reino) {
        return res.status(400).json({mensaje: "id_personaje, id_reino, es_gobernante son obligatorias"})
    }

   if (
       typeof id_personaje !== "number" ||
       typeof id_reino !== "number" ||
       typeof es_gobernante !== "boolean") {
        return res.status(400).json({mensaje: "Error en tipo de id_personaje, id_reino, es_gobernante"})
    }


    try {
        const Personaje_habita_reino = await prisma.personaje_habita_reino.create({
            data: {
                id_personaje,
                id_reino, 
                es_gobernante
            }
        })
        res.json(Personaje_habita_reino)
    } catch {
        res.status(500).json({mensaje: "Error al registrar personaje en reino"})
    }
}

const getPersonaje_habita_reino = async (req , res) => {
    const Personaje_habita_reino = await prisma.personaje_habita_reino.findMany()
    res.status(200).json(Personaje_habita_reino)
}

const getPersonaje_habita_reinoById = async (req, res) => {
    const { id } = req.params
    let Personaje_habita_reino
    try{
        if(req.query.tipo == "personaje") {
            Personaje_habita_reino = await prisma.personaje_habita_reino.findMany({
                where: {
                    id_personaje: Number(id)
                }
            })
        } else if (req.query.tipo == "reino") {
            Personaje_habita_reino = await prisma.personaje_habita_reino.findMany({
                where: {
                    id_reino: Number(id)
                }
            })
        } else {
            return res.status(400).json({mensaje: "Error en parametro tipo"})
        }
        res.json(Personaje_habita_reino) 
    } catch {
        res.status(500).json({mensaje: 'Error al buscar habitante'})
    }
}

const updatePersonaje_habita_reino = async (req, res) => {
    let { id_personaje, id_reino} = req.params
    const { es_gobernante } = req.body

    if(!id_personaje || !id_reino) {
        return res.status(400).json({mensaje: "Se necesita un id_personaje e id_reino para actualizar"})
    }
    

    id_personaje = Number(id_personaje)
    id_reino = Number(id_reino)

    if(isNaN(id_personaje) || isNaN(id_reino)) {
        return res.status(400).json({mensaje: "id_personaje y id_reino debe de ser un número "})
    }


    try {
        const updatepersonaje_habita_reino = await prisma.personaje_habita_reino.update({
            where: {id_personaje_id_reino: {
                id_personaje,
                id_reino
            }},
            data: {
                es_gobernante
            }
        }
        );
        res.status(200).json(updatepersonaje_habita_reino);
    } catch {
        res.status(500).json({mensaje: "Error al actualizar personaje en el reino"})
    }
}


const deletePersonaje_habita_reino = async (req, res) => {
    const { id_personaje, id_reino } = req.params
    try {
        const deletepersonaje_habita_reino = await prisma.personaje_habita_reino.delete({
            where: {id_personaje_id_reino: {
                id_personaje: Number(id_personaje),
                id_reino: Number(id_reino)
            }}
        })
        res.status(200).json(deletepersonaje_habita_reino)
    } catch  {
        res.status(500).json({mensaje: "Error al borrar personaje del reino"})
    }
}


const Personaje_habita_reinoContoller = {
    createPersonaje_habita_reino,
    getPersonaje_habita_reino,
    getPersonaje_habita_reinoById,
    updatePersonaje_habita_reino,
    deletePersonaje_habita_reino
}

export default Personaje_habita_reinoContoller