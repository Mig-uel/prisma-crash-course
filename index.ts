import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  /* prisma queries */

  // create user
  const user = await prisma.user.create({
    data: {
      name: 'Jane Doe',
      email: 'Jane@email.com',
    },
  })
  console.log(user)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
