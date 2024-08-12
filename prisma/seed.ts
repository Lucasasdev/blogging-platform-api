import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  const customer = await prismaClient.user.create({
    data: {
      email: "ariadne@prisma.io",
      name: "Ariadne",
      posts: {
        create: [
          {
            title: "My first day at Prisma",
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            categories: {
              create: {
                name: "Office",
              },
            },
          },
          {
            title: "How to connect to a SQLite database",
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            categories: {
              create: [{ name: "Databases" }, { name: "Tutorials" }],
            },
          },
        ],
      },
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
