import prisma from '../../lib/prisma'


export default async (req, res) => {
    const exos = await prisma.exercise.findMany({
        where: {
            AND: Object.entries(req.body).map(([attribute, values]) => {
                return {
                    [`exercise_${attribute}`]: {
                        some: {
                            [`${attribute}_name`]: { in: values }
                        }
                    }
                }
            })
        }
    })
    res.json(exos)
}
