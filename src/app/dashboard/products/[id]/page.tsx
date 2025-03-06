import ProductDetailPage from '@/components/Products/ProductsDetailPage'
import { getProduct, getProducts } from '@/lib/api/products'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type tParams = Promise<{ id: string }>

export async function generateStaticParams() {
    const { data, error } = await getProducts()

    if (error || !data) {
        console.error(error)

        return []
    }

    return data.map((product) => ({ id: product.id.toString() }))
}

export async function generateMetadata(props: {
    params: tParams
}): Promise<Metadata> {
    const { id } = await props.params

    if (!id) {
        return {
            title: 'Product Not Found',
        }
    }

    const { data, error } = await getProduct(Number(id))

    if (error || !data) {
        console.error(error)

        notFound()
    }

    const product = data

    return {
        title: product.title,
        description: product.description,
        openGraph: {
            title: product.title,
            description: product.description,
            images: [product.image || ''],
        },
    }
}

export default async function ProductDetails(props: { params: tParams }) {
    const { id } = await props.params

    if (!id) {
        return <div>Product ID not defined</div>
    }

    const { data, error } = await getProduct(Number(id))

    if (error || !data) {
        console.error(error)

        notFound()
    }

    return <ProductDetailPage product={data} />
}
