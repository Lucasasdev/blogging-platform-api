import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  const customer = await prismaClient.customer.create({
    data: {
      id: 1,
      name: "Example",
      cpf: "000.000.000-00",
    },
  });

  return customer;
}

main()
  .then(async () => {
    //await prismaClient.$disconnect();

    console.log("Completed seeding!");
  })
  .catch(async (error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect;
  });
