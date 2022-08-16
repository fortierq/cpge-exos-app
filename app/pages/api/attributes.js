import prisma from '../../lib/prisma'
import { attributes } from '../../lib/constants'

export default async (_, res) => {
    const data = {}
    await Promise.all(attributes.map(async a => // parallel requests
        data[a] = await prisma.$queryRawUnsafe(`SELECT name FROM ${a}`)
    ))
    res.json(data)
}
