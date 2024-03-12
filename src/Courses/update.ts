import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const result = await prisma.courses.update({
    where: {
      id:  'd25256ee-96ac-4428-90bb-cdd5b5205e60',
    },
    data: {
      duration: 300,
      name: "Curso de React Native - v2",
      description: "Curso muito bom de React Native",
    },
  });


  console.log(result);
}


main();