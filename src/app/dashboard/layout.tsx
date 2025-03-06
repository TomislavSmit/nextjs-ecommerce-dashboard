'use client'

import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { isAuthenticated, loading, logout } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            router.push('/')
        }
    }, [loading, isAuthenticated, router])

    if (loading) {
        return (
            <div className='flex items-center justify-center h-screen'>
                Loading...
            </div>
        )
    }

    return (
        <div className='flex h-screen'>
            <aside className='w-64 bg-gray-800 text-white p-4'>
                <nav>
                    <a href='/dashboard/categories' className='block py-2'>
                        Categories
                    </a>
                    <a href='/dashboard/products' className='block py-2'>
                        Products
                    </a>
                    <a href='/dashboard/users' className='block py-2'>
                        Users
                    </a>
                </nav>
            </aside>
            <main className='flex-1 p-6'>
                <header className='flex justify-between mb-4'>
                    <div>Breadcrumb</div>
                    <button onClick={logout} className='text-red-500'>
                        Sign Out
                    </button>
                </header>
                {children}
            </main>
        </div>
    )
}
