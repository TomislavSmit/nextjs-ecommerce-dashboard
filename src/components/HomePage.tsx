'use client'

import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function HomePage() {
    const { isAuthenticated } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (isAuthenticated) {
            router.replace('/dashboard/categories')
        } else {
            router.replace('/login')
        }
    }, [isAuthenticated, router])

    return (
        <div className='flex items-center justify-center h-screen'>
            <p>Redirecting...</p>
        </div>
    )
}
