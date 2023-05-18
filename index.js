const {prisma} = require('./generated/prisma-client')

async function main (){
    await prisma.createUser({
        name: 'Julio Henrique',
        email: 'julio.henrique@email.com',
        password: '123456'
    })

    const users = await prisma.users()

    console.log('Users: ', users)
}

main().catch(e => console.error(e))