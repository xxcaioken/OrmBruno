import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const result = await prisma.coursesModules.delete({
   where: {
  	id: "b783db54-91c1-4b5a-bf1c-22a37ce9e9de",
   },
  });


console.log(result);
}


main();