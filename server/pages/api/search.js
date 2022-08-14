import prisma from '../../lib/prisma'


export default async function handle(req, res) {
    console.log(req.query)
    const cond = {}
    for (const a in req.query) {
        console.log(a)
        if (req.query[a] !== null) {
        }}
    // const result = await prisma.exercise.findMany(
    //     {
    //         where: {
    //             ds: {
                        
    // )

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
