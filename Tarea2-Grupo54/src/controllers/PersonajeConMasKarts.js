import prisma from '../prismaClient.js'

const getPersonajeConMasKarts = async (req, res) => {
    try{
        const PersonajeMasKarts = await prisma.personajes.findMany({
            take:1,
            orderBy:{
                karts:{
                    _count: 'desc'
                }
            },
            include: {
                _count:{
                    select:{
                        karts:true
                    }
                }
            }
        });
        res.json(PersonajeMasKarts);
    } catch (err){
        res.status(404).json({mensaje: 'Error'})
    }
}
const PersonajeConMasKarts = {
    getPersonajeConMasKarts
}
export default PersonajeConMasKarts