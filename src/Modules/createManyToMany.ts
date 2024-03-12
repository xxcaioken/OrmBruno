import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const result = await prisma.coursesModules.create({
    data: {
 	fk_id_course: "db27d712-27d4-4cec-8b9f-1c27fa9f5e2e",
 	fk_id_module: "5e7cceb3-61f0-4f4d-8ac6-34d2445226c7",
    },
  });


console.log(result);
}


main();