import prisma from '../../lib/prisma'


export default async (req, res) => {
    const attributes = ["ds", "subject", "language", "algorithm"]
    const data = {}
    await Promise.all(attributes.map(async a => { // parallel requests
        const rows = await prisma.$queryRawUnsafe(`SELECT name FROM ${a}`)
        data[a] = rows
    }))
    res.json(data)
}
