import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const result = await prisma.courses.findMany({
    where: {
 	id: "db27d712-27d4-4cec-8b9f-1c27fa9f5e2e"
    },


    include: {
 	modules: true,
    },
});


//console.log(result);
console.log(JSON.stringify(result));
}


main();