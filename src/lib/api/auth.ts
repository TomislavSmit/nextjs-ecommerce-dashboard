import axios from 'axios'
import { API_URL } from './config'

interface LoginResponse {
    data?: { token: string }
    error?: string
}

export const loginUser = async (
    username: string,
    password: string
): Promise<LoginResponse> => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, {
            username,
            password,
        })

        return { data: response.data }
    } catch (error) {
        console.error(error)

        return { error: 'Error logging in' }
    }
}
