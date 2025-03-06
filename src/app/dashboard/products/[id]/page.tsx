import ProductDetailPage from '@/components/Products/ProductsDetailPage'
import { API_URL } from '@/lib/api/config'
import { Product } from '@/lib/types/products'

interface ProductDetailPageProps {
    params: { id: string }
}

export default async function ProductDetails({
    params,
}: ProductDetailPageProps) {
    const { id } = await params

    if (!id) {
        return <div>Product ID not defined</div>
    }

    const response = await fetch(`${API_URL}/products/${id}`)

    if (!response.ok) {
        return <div>Product not found</div>
    }

    const product: Product = await response.json()

    return <ProductDetailPage product={product} />
}
