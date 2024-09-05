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

  /* GET ALL USERS AND INCLUDE THEIR ARTICLES */
  // const users = await prisma.user.findMany({
  //   include: {
  //     articles: true,
  //   },
  // })
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

  /* GET ALL ARTICLES */
  // const articles = await prisma.article.findMany()
  // console.log(articles)

  /* CREATE USER AND ARTICLE AND ASSOCIATE THEM */
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Sarah Smith',
  //     email: 'sarah@email.com',
  //     articles: {
  //       create: {
  //         title: "Sarah's First Article",
  //         body: "Sarah's First Article",
  //       },
  //     },
  //   },
  // })
  // console.log(user)

  /* CREATE ANOTHER ARTICLE */
  // const article = await prisma.article.create({
  //   data: {
  //     title: 'Sample Article',
  //     body: 'This is a sample article',
  //     author: {
  //       connect: {
  //         id: 2,
  //       },
  //     },
  //   },
  // })
  // console.log(article)

  /* LOOP OVER USERS ARTICLES */
  // const users = await prisma.user.findMany({
  //   include: {
  //     articles: true,
  //   },
  // })

  // users.forEach((user) => {
  //   console.log(`USER: ${user.name}, EMAIL: ${user.email}`)
  //   console.log('ARTICLES:')

  //   user.articles.forEach((article) => {
  //     console.log(`- TITLE: ${article.title} `)
  //     console.log(`- BODY: ${article.body} `)
  //   })

  //   console.log('\n')
  // })

  /* UPDATE DATA */
  // const user = await prisma.user.update({
  //   where: {
  //     id: 1,
  //   },
  //   data: {
  //     name: 'John Doe Jr.',
  //   },
  // })
  // console.log(user)

  /* REMOVE DATA */
  const article = await prisma.article.delete({
    where: {
      id: 2,
    },
  })
  console.log(article)
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
