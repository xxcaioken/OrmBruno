import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const result = await prisma.coursesModules.create({
    data: {


 	course: {
 	  create: {
        duration: 200,
 	        name: "Curso de ABC",
 	        description: "Curso completo de ABC",
            teacher:{
                connectOrCreate: {
                where: {
                  name: "Caio Kormives",
          },
          create: {
            name: "Caio Kormives",
          },
         },
    },
},
},


 	module: {
 	  create: {
 		description: "Curso completo de ABC",
 		  name: "Módulo A",
 	  },
 	},


   },
});


console.log(result);
}


main();