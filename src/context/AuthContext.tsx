'use client'

import { loginUser } from '@/lib/api/auth'
import { useRouter } from 'next/navigation'
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react'

interface AuthContextProps {
    isAuthenticated: boolean
    loading: boolean
    login: (username: string, password: string) => Promise<boolean>
    logout: () => void
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const user = localStorage.getItem('user')
        if (user) {
            setIsAuthenticated(true)
        }
        setLoading(false)
    }, [])

    const login = async (username: string, password: string) => {
        const { data, error } = await loginUser(username, password)

        if (error) {
            console.error(error)

            return false
        }

        if (data?.token) {
            localStorage.setItem(
                'user',
                JSON.stringify({ username, token: data.token })
            )
            setIsAuthenticated(true)
            router.push('/dashboard/categories')

            return true
        }

        return false
    }

    const logout = () => {
        localStorage.removeItem('user')
        setIsAuthenticated(false)

        router.push('/')
    }

    return (
        <AuthContext.Provider
            value={{ isAuthenticated, loading, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)

    if (!context) throw new Error('useAuth must be used within AuthProvider')

    return context
}
