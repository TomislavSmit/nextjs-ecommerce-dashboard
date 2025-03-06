import { User } from '@/types/users'

export const getUsers = async (): Promise<{
    data?: User[]
    error?: string
}> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`)

        if (!response.ok) {
            return { error: 'Failed to fetch users' }
        }

        const users = await response.json()

        return { data: users }
    } catch (error) {
        console.error('Failed to fetch users', error)

        return { error: 'Failed to fetch users' }
    }
}
