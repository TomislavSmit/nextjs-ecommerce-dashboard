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
