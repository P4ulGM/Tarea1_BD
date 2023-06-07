import prisma from "../prismaClient.js"

const GetPersonajes = async (req, res) => {
    const personajes = await prisma.personajes.findMany()
    res.json(personajes)
}

const GetPersonajesPorId = async (req, res) => {
    const { id } = req.params
    try{
        const personaje = await prisma.personajes.findUniqueOrThrow({
            where: {
                id: Number(id)
            }
        })
        res.json(personaje) 
    } catch {
        res.status(404).json({mensaje: 'personaje no encontrado'})
    }
}

const CrearPersonaje = async (req, res) => {
    const { nombre, fuerza, fecha_nacimiento, objeto} = req.body
    

    if (!nombre || !fuerza || !fecha_nacimiento) {
        return res.status(400).json({mensaje: "Nombre, Fuerza y Fecha de nacimiento son obligatorias"})
    }

   if (
       typeof nombre !== "string" ||
       typeof fuerza !== "number" ||
       typeof fecha_nacimiento  !== "string") {
        return res.status(400).json({mensaje: "Error en tipo de Nombre, Fuerza o Fecha de nacimiento"})
    }


    if(nombre.lengh > 45) {
        return res.status(400).json({mensaje: "Nombre muy largo"})
    }



    if(objeto){
        if(typeof objeto === "string") {
            if(objeto.length > 30) {
                return res.status(400).json({mensaje: "Objeto muy largo"})
            }
        } else
        return res.status(400).json({mensaje: "Objeto no es string"})
    }


    const fechaNacimientoObj = new Date(Date.parse(fecha_nacimiento));

    if(isNaN(fechaNacimientoObj)) {
        return res.status(400).json({mensaje: "Fecha con formato incorrectoz"})
    }

    
    try {
        const personaje = await prisma.personajes.create({
            data: {
                nombre,
                fuerza,
                fecha_nacimiento: fechaNacimientoObj,
                objeto // no importa si es null , en la base de datos también puede ser
            }
        })
        res.json(personaje)
    } catch {
        res.status(500).json({mensaje: "Error al crear el personaje"})
    }
}



const PersonajesController = {
    GetPersonajes,
    GetPersonajesPorId,
    CrearPersonaje
}

export default PersonajesController