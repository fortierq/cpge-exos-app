import prisma from '../../lib/prisma'


export default async function handle(req, res) {
    console.log(req.query)
    const result = await prisma.user.findMany

    res.json(req.query)


    // const attributes = ["ds", "subject", "language", "algorithm"]
    // const data = {}
    // for (const a of attributes) {
    //     console.log(a)
    //     const rows = await prisma.$queryRawUnsafe(`SELECT name FROM ${a}`)
    //     data[a] = rows
    // }
    // console.log(data)
    // res.json(data)
}
