import prisma from '../../lib/prisma'
import { attributes } from '../../lib/constants'

export default async (_, res) => {
    const data = {}
    await Promise.all(attributes.map(async a => // parallel requests
        data[a] = await prisma.$queryRawUnsafe(`SELECT name FROM ${a}`)
    ))
    const d2 = {}
    for (const a of attributes) {
        d2[a] = data[a].map(d => d.name)
    }
    res.json(d2)
}
