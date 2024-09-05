import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  /* PRISMA QUERIES */

  /* CREATE USER */
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Jane Doe',
  //     email: 'Jane@email.com',
  //   },
  // })
  // console.log(user)

  /* GET ALL USERS */
  // const users = await prisma.user.findMany()
  // console.log(users)

  /* CREATE AN ARTICLE AND ASSOCIATE IT WITH A USER */
  // const article = await prisma.article.create({
  //   data: {
  //     title: "John's First Article",
  //     body: "This is John's first article",
  //     author: {
  //       connect: {
  //         id: 1,
  //       },
  //     },
  //   },
  // })
  // console.log(article)

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
