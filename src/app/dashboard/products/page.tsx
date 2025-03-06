import ProductsPage from '@/components/Products/ProductsPage'
import { Product } from '@/lib/types/products'

export default async function Products() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
    const products: Product[] = await response.json()

    return <ProductsPage products={products} />
}
