import prisma from "../../lib/prisma";
import { attributes } from "../../lib/constants";

export default async (_, res) => {
  const d = {};
  await Promise.all(
    attributes.map(
      async (a) => (d[a] = (await prisma[a].findMany()).map((e) => e.name))
    )
  );
  res.json(d);
};
