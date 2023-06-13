import { PrismaClient } from '@prisma/client'
import prisma from '../prismaClient.js'

const getGobernantesReino = async (req, res) => {
    const { id_reino } = req.params
    try{
        const gobernantes = await prisma.personaje_habita_reino.findMany({
            where:{
                id_reino: Number(id_reino),
                es_gobernante: true
            },
            select: {
                personaje: true,
                reino: true
            }
        });
        res.json(gobernantes);
    } catch (err){
        res.status(404).json({mensaje: 'Error'})
    }
}

const getAllGobernantes = async (req, res) => {
    try{
        const allgobernantes = await prisma.personaje_habita_reino.findMany({
            where:{
                es_gobernante: true
            },
            select: {
                personaje: true,
                reino: true
            }
        });
        res.json(allgobernantes);
    } catch (err){
        res.status(404).json({mensaje: 'Error'})
    }
}

const Gobernante = {
    getGobernantesReino,
    getAllGobernantes
}
export default Gobernante