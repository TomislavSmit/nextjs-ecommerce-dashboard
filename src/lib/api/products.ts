import { Product } from '../../types/products'

export const getProducts = async (): Promise<{
    data?: Product[]
    error?: string
}> => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/products`
        )

        if (!response.ok) {
            return { error: 'Failed to fetch products' }
        }

        const products = await response.json()

        return { data: products }
    } catch (error) {
        console.error('Failed to fetch products', error)

        return { error: 'Failed to fetch products' }
    }
}

export const getProduct = async (
    id: number
): Promise<{
    data?: Product
    error?: string
}> => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
        )

        if (!response.ok) {
            return { error: 'Failed to fetch product' }
        }

        const product = await response.json()
        return { data: product }
    } catch (error) {
        console.error('Failed to fetch product', error)
        return { error: 'Failed to fetch product' }
    }
}

export const deleteProduct = async (id: number) => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`,
            {
                method: 'DELETE',
            }
        )

        if (!response.ok) {
            return false
        }

        return true
    } catch (error) {
        console.error('Failed to delete product', error)

        return false
    }
}

export const addProduct = async (product: Product): Promise<boolean> => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/products`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            }
        )

        if (!response.ok) {
            return false
        }

        return true
    } catch (error) {
        console.error('Failed to add product', error)

        return false
    }
}
