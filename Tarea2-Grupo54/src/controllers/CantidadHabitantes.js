import { PrismaClient } from '@prisma/client'
import prisma from '../prismaClient.js'

const getCantidadHabitantes = async (req, res) => {
    const { id_reino } = req.params
    try{
        const cantidad_habitantes = await prisma.reinos.findUniqueOrThrow({
            where:{
                id: Number(id_reino)
            },
            include: {
                _count:{
                    select:{
                        habitantes:true
                    }
                }
            }
        });
        res.json(cantidad_habitantes);
    } catch (err){
        res.status(404).json({mensaje: 'Error'})
    }
}

const CantidadHabitantes = {
    getCantidadHabitantes
}
export default CantidadHabitantes