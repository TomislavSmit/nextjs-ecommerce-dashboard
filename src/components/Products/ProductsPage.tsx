'use client'

import { deleteProduct } from '@/lib/api/products'
import { Product } from '@/lib/types/products'
import Link from 'next/link'
import CardItem from '../common/CardItem'

export default function ProductsPage({ products }: { products: Product[] }) {
    const handleDelete = async (id: number) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            const isDeleted = await deleteProduct(id)

            if (isDeleted) {
                window.location.reload()
            }
        }
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            <div className='border p-4 rounded-lg shadow flex flex-col items-center justify-center max-w-[300px]'>
                <div>Add New</div>
                <div className='text-4xl'>+</div>
            </div>

            {products.map((product) => (
                <CardItem
                    key={product.id}
                    title={product.title}
                    image={product.image}
                    deleteButton='Delete'
                    handleDelete={() => handleDelete(product.id)}
                    viewButton={
                        <Link href={`/dashboard/products/${product.id}`}>
                            View
                        </Link>
                    }
                />
            ))}
        </div>
    )
}
