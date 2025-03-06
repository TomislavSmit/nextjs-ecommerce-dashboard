'use client'

import { Product } from '@/lib/types/products'
import Link from 'next/link'
import CardItem from '../common/CardItem'

export default function ProductsPage({ products }: { products: Product[] }) {
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
                    deleteButton={<span>Delete</span>}
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
