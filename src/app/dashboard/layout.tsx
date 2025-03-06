'use client'

import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'
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

    return (
        <div className='h-screen flex flex-col'>
            <header className='flex justify-between items-center bg-gray-100 p-4 shadow'>
                <div>Breadcrumb here</div>
                <button onClick={logout} className='text-red-500'>
                    Sign Out
                </button>
            </header>
            <div className='flex flex-1'>
                <aside className='w-64 bg-gray-800 text-white p-4'>
                    <nav>
                        <Link
                            href='/dashboard/categories'
                            className='block py-2'
                        >
                            Categories
                        </Link>
                        <Link href='/dashboard/products' className='block py-2'>
                            Products
                        </Link>
                        <Link href='/dashboard/users' className='block py-2'>
                            Users
                        </Link>
                    </nav>
                </aside>
                <main className='flex-1 p-6 overflow-auto'>{children}</main>
            </div>
        </div>
    )
}
