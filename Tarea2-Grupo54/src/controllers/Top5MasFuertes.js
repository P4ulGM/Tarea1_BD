import { PrismaClient } from '@prisma/client'
import prisma from '../prismaClient.js'


const getMasFuertes = async (req, res) => {
    try{
        const orderedPersonajes = await prisma.personajes.findMany({
            take:2,
            orderBy: {
                fuerza:'desc'
            }
        });
        res.json(orderedPersonajes);
    } catch (err){
        res.status(404).json({mensaje: 'XD'})
    }
}


const Top5MasFuertes = {
    getMasFuertes
}
export default Top5MasFuertes