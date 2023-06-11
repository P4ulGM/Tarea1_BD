import prisma from '../prismaClient.js'

const createPersonaje_habita_reino = async (req, res) => {
    const { id_personaje, id_reino, fecha_registro, es_gobernante } = req.body

    if (!id_personaje || !id_reino || !fecha_registro || !es_gobernante) {
        return res.status(400).json({mensaje: "id_personaje, id_reino, fecha_registro, es_gobernante son obligatorias"})
    }

   if (
       typeof id_personaje !== "number" ||
       typeof id_reino !== "number" ||
       typeof fecha_registro  !== "string" ||
       typeof es_gobernante !== "boolean") {
        return res.status(400).json({mensaje: "Error en tipo de id_personaje, id_reino, fecha_registro, es_gobernante"})
    }

    let fechaRegistroObj = Date.parse(fecha_registro)
    if(isNaN(fechaRegistroObj)) {
        return res.status(400).json({mensaje: "Fecha con formato incorrectos"})
    } else {
        fechaRegistroObj = new Date(fechaRegistroObj)
    }

    try {
        const Personaje_habita_reino = await prisma.personaje_habita_reino.create({
            data: {
                id_personaje,
                id_reino,
                fecha_registro, 
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
    res.json(Personaje_habita_reino)
}

const getPersonaje_habita_reinoById = async (req, res) => {
    const { id_personaje } = req.params
    try{
        const Personaje_habita_reino = await prisma.personaje_habita_reino.findMany({
            where: {
                id_personaje: Number(id_personaje)
            }
        })
        res.json(Personaje_habita_reino) 
    } catch {
        res.status(404).json({mensaje: 'personaje no habita ningun reino'})
    }
}

const updatePersonaje_habita_reino = async (req, res) => {
    let { id_personaje, id_reino} = req.params
    const { fecha_registro, es_gobernante } = req.body

    if(!id_personaje || !id_reino) {
        return res.status(400).json({mensaje: "Se necesita un id_personaje e id_reino para actualizar"})
    } else try {
        id_personaje = Number(id_personaje);
        id_reino = Number(id_reino)
    } catch {
        return res.status(400).json({mensaje: "id_personaje o id_reino debe de ser un número "})
    }

    const DatosActualizados = {
        fecha_registro, 
        es_gobernante
    }

    try {
        const updatepersonaje_habita_reino = await prisma.personaje_habita_reino.updateMany({
            where: {
                id_personaje: parseInt(req.params.id_personaje),
                id_reino: parseInt(req.params.id_reino)},
                data: DatosActualizados
        });
        res.status(200).json(updatepersonaje_habita_reino);
    } catch {
        res.status(500).json({mensaje: "Error al actualizar personaje en el reino"})
    }
}


const deletePersonaje_habita_reino = async (req, res) => {
    const { id_personaje, id_reino } = req.params
    try {
        const deletepersonaje_habita_reino = await prisma.personaje_habita_reino.deleteMany({
            where: {
                AND: [
                  {
                      id_personaje: Number(id_personaje),
                  },
                  {
                      id_reino: Number(id_reino)
                  }
                ]
              }
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