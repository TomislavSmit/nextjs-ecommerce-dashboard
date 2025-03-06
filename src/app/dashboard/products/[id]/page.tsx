import ProductDetailPage from '@/components/Products/ProductsDetailPage'
import { API_URL } from '@/lib/api/config'
import { Product } from '@/types/products'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type tParams = Promise<{ id: string }>

export async function generateMetadata(props: {
    params: tParams
}): Promise<Metadata> {
    const { id } = await props.params

    if (!id) {
        return {
            title: 'Product Not Found',
        }
    }

    const response = await fetch(`${API_URL}/products/${id}`)

    if (!response.ok) {
        notFound()
    }

    const product = await response.json()

    return {
        title: product.title,
        description: product.description,
        openGraph: {
            title: product.title,
            description: product.description,
            images: [product.image],
        },
    }
}

export default async function ProductDetails(props: { params: tParams }) {
    const { id } = await props.params

    if (!id) {
        return <div>Product ID not defined</div>
    }

    const response = await fetch(`${API_URL}/products/${id}`)

    if (!response.ok) {
        notFound()
    }

    const product: Product = await response.json()

    return <ProductDetailPage product={product} />
}
