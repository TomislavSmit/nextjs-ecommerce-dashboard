import CategoriesPage from '@/components/Categories/CategoriesPage'
import { getProducts } from '@/lib/api/products'
import { CategoryProducts } from '@/types/categories'
import { Product } from '@/types/products'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Categories',
    description: 'Browse all product categories with their products.',
}

export const revalidate = 60

export default async function Categories() {
    const { data, error } = await getProducts()

    if (error || !data) {
        console.error(error)

        return <div className='text-red-500'>Error fetching products.</div>
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
