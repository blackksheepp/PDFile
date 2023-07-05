import prisma from ".";

export async function getUsers() {
    try {
        const users = await prisma.user.findMany()
        return { users }
    } catch (error) {
        return { error }
    }
}

export async function getUser(email: any) {
    try {
        const users = await prisma.user.findFirst(
            {
                where: {
                    email: email
                }
            }
        )
        return { users }
    } catch (error) {
        return { error }
    }
}


export async function createUser(user: any) {
    try {
        const userFromDB = await prisma.user.create(
            {
                data: user
            }
        )
        return { userFromDB }
    } catch (error) {
        return { error }
    }
}


export async function getUserById(id: any) {
    try {
        const user = await prisma.user.findUnique(
            {
                where: {
                    id: id
                }
            }
        ) 
        return { user }
    } catch (error) {
        return { error }
    }
}

