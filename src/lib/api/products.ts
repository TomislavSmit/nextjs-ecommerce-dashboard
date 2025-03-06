import { Product } from '../types/products'

export const getProducts = async () => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/products`
        )

        return response.json()
    } catch (error) {
        console.error('Failed to fetch products', error)
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
