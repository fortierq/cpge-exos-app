import prisma from '../../../lib/prisma'


export default async (req, res) => {
    const exo = await prisma.exercise.findUnique({
        where: {
            path: req.query.path.replace('-', '/')
        }
    })
    res.json(exo)
}
