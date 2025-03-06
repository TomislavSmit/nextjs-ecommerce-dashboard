'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/context/AuthContext'
import { useState } from 'react'

export default function LoginPage() {
    const { login } = useAuth()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const success = await login(username, password)
        if (!success) setError('Login failed')
    }

    return (
        <div className='flex items-center justify-center h-screen bg-gray-100'>
            <form
                onSubmit={handleSubmit}
                className='space-y-4 p-6 bg-white shadow-lg rounded-lg'
            >
                <h1 className='text-2xl font-semibold'>Admin Login</h1>
                {error && <p className='text-red-500 text-sm'>{error}</p>}
                <Input
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type='submit' className='w-full'>
                    Sign In
                </Button>
            </form>
        </div>
    )
}
