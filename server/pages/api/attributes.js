import prisma from '../../lib/prisma'


export default async (_, res) => {
    const attributes = ["ds", "subject", "language", "algorithm"]
    const data = {}
    await Promise.all(attributes.map(async a => // parallel requests
        data[a] = await prisma.$queryRawUnsafe(`SELECT name FROM ${a}`)
    ))
    res.json(data)
}
