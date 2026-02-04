import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "demo@balance.local" },
    update: {},
    create: {
      email: "demo@balance.local",
      name: "Demo User"
    }
  });

  const reflections = [
    {
      label: "Mykhailo Fedorov",
      note:
        "Ukrainian — main; English — working for international communication; Russian — fluent"
    },
    {
      label: "Taras Kytsmey",
      note: "Ukrainian — main; English — fluent/working (international business)"
    },
    {
      label: "Oleksandr Kosovan",
      note: "Ukrainian — main; English — fluent/working (product & global teams)"
    },
    {
      label: "Me",
      note: "Used to be better. Now B1. Currently not studying or practicing."
    }
  ];

  await prisma.reflectionRow.deleteMany({ where: { userId: user.id } });
  await prisma.reflectionRow.createMany({
    data: reflections.map((row) => ({ ...row, userId: user.id }))
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
