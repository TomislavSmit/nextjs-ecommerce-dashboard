export const getProducts = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)

    return response.json()
}
