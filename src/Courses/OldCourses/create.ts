import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso 1 de Node.JS",
      duration: 201,
      description: "Curso 1 top de Node.JS",
      fk_id_teacher:'5029a0b9-f51d-4269-b42d-0ca6afc60b90'
    },
  });

  console.log(result);
}

main();