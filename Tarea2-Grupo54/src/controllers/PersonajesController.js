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
}



const PersonajesController = {
    GetPersonajes,
    GetPersonajesPorId
}

export default PersonajesController