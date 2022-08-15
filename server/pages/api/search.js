import prisma from '../../lib/prisma'


export default async (req, res) => {
    const exos = await prisma.exercise.findMany({
        where: {
            AND: Object.entries(req.query).map(([attribute, values]) => {
                return {
                    [`exercise_${attribute}`]: {
                        some: {
                            [`${attribute}_name`]: { in: values.split(',') }
                        }
                    }
                }
            })
        }
    })
    res.json(exos)
}
