import ProductsPage from '@/components/Products/ProductsPage'
import { getProducts } from '@/lib/api/products'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Products',
    description: 'Browse all products in the store.',
}

export default async function Products() {
    const { data, error } = await getProducts()

    if (error) {
        console.error(error)

        return <div>Error fetching products</div>
    }

    return <ProductsPage products={data || []} />
}
