import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const result = await prisma.modules.create({
    data: {
 	 description: "Aprendendo firebase com react do zero",
 	 name: "Aprendendo react com Firebase",
 	 courses: {
 	      // Criar um novo relacionamento
 		create: {
 		  // Abrir o relacionamento
 		  course: {
 	      // Conectar ao relacionamento existente
 			connect: {
     			id: "db27d712-27d4-4cec-8b9f-1c27fa9f5e2e",
 			},
 		  },
 		},
  	  },
    },
});


console.log(result);
}


main();