import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const anastasiia = await prisma.user.create({
    data: {
      email: 'anastasiia.zbkva@gmail.com',
      firstName: 'Anastasiia',
      lastName: 'Zubkova',
      diaryEntries: {
        create: [
          {
            name: 'Little Victories Coffee Roasters - Elgin',
            addressLine1: '44 Elgin St',
            city: 'Ottawa',
            postalCode: 'K1P 1C7',
            country: 'Canada',
            note: 'Delicious coffee, but pricey',
            rating: 4,
          },
          {
            name: 'Altitude Gym Orleans',
            addressLine1: '265 Centrum Blvd',
            city: 'Orléans',
            postalCode: 'K1E 3X7',
            country: 'Canada',
            note: 'Cool bouldering gym with really fun routes and lots of plants',
            rating: 5,
          },
          {
            name: 'Cora Breakfast and Lunch',
            addressLine1: '179 Rideau St',
            city: 'Ottawa',
            postalCode: 'K1N 5X8',
            country: 'Canada',
            note: 'Favourite breakfast spot',
            rating: 5,
          },
          {
            name: 'Luskville Falls Trail',
            addressLine1: "Chem. de l'Hôtel de Ville",
            city: 'Luskville',
            postalCode: 'J0X 2G0',
            country: 'Canada',
            hasVisited: false,
            note: 'I heard this trail has great views. Have to visit soon!',
          },
        ],
      },
    },
  });
  console.log(anastasiia);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
