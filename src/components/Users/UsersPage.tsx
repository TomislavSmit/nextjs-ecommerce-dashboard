'use client'

import CardItem from '@/components/common/CardItem'
import { User } from '@/types/users'

export default function UsersPage({ users }: { users: User[] }) {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {users.map((user) => (
                <CardItem
                    key={user.id}
                    title={user.name.firstname + ' ' + user.name.lastname}
                    deleteButton='Delete'
                    viewButton='View'
                >
                    <div className='mb-4'>
                        Address: {user.address.street}, {user.address.city}
                    </div>
                </CardItem>
            ))}
        </div>
    )
}
