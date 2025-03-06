import CategoriesPage from '@/components/Categories/CategoriesPage'
import { getProducts } from '@/lib/api/products'
import { CategoryProducts } from '@/types/categories'
import { Product } from '@/types/products'

export default async function Categories() {
    const { data, error } = await getProducts()

    if (error || !data) {
        console.error(error)
        throw new Error('Failed to fetch products')
    }

    const categories: CategoryProducts = data.reduce(
        (acc: CategoryProducts, product: Product) => {
            if (!acc[product.category]) acc[product.category] = []
            acc[product.category].push(product)

            return acc
        },
        {}
    )

    return <CategoriesPage categories={categories} />
}
