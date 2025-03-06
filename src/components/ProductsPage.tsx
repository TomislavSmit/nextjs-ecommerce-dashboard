'use client'

import { Product } from '@/lib/types/products'
import Image from 'next/image'
import { Button } from './ui/button'

export default function ProductsPage({ products }: { products: Product[] }) {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            <div className='border p-4 rounded-lg shadow flex flex-col items-center justify-center max-w-[300px]'>
                <div>Add New</div>
                <div className='text-4xl'>+</div>
            </div>

            {products.map((product) => (
                <div
                    key={product.id}
                    className='flex justify-between flex-col border p-4 rounded-lg shadow max-w-[300px]'
                >
                    <h2 className='font-semibold mb-2 line-clamp-2'>
                        {product.title}
                    </h2>

                    <Image
                        width={200}
                        height={200}
                        src={product.image}
                        alt={product.title}
                        className='w-full h-40 object-contain mb-4'
                    />
                    <div className='flex justify-between'>
                        <Button>Delete</Button>
                        <Button>View</Button>
                    </div>
                </div>
            ))}
        </div>
    )
}
