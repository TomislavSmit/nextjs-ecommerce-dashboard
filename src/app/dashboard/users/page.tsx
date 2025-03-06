import UsersPage from '@/components/Users/UsersPage'
import { getUsers } from '@/lib/api/users'

export default async function Users() {
    const { data, error } = await getUsers()

    if (error) {
        console.error(error)

        return <div>Error fetching users</div>
    }

    return <UsersPage users={data || []} />
}
