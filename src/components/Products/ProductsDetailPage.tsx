'use client'

import { Product } from '@/types/products'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductDetailPage({ product }: { product: Product }) {
    if (!product) {
        return <div>Product not found.</div>
    }

    return (
        <>
            <Link href='/dashboard/products'>
                <div className='flex items-center mb-4'>
                    <ArrowLeft className='w-6 h-6' /> Back
                </div>
            </Link>
            <div className='max-w-2xl mx-auto p-6 border rounded-lg shadow'>
                <h1 className='text-2xl font-bold mb-4'>{product.title}</h1>
                <Image
                    width={200}
                    height={200}
                    src={product.image || ''}
                    alt={product.title}
                    className='w-full h-64 object-contain mb-4'
                />
                <p className='mb-2'>Category: {product.category}</p>
                <p className='mb-2'>Price: ${product.price}</p>
                <p>{product.description}</p>
            </div>
        </>
    )
}
