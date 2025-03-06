'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ReactNode } from 'react'

interface CardItemProps {
    title: string
    image: string
    deleteButton: ReactNode
    viewButton: ReactNode
}

export default function CardItem({
    title,
    image,
    deleteButton,
    viewButton,
}: CardItemProps) {
    return (
        <div className='flex justify-between flex-col border p-4 rounded-lg shadow max-w-[300px]'>
            <h2 className='font-semibold mb-2 line-clamp-2'>{title}</h2>
            <Image
                width={200}
                height={200}
                src={image}
                alt={title}
                className='w-full h-40 object-contain mb-4'
            />
            <div className='flex justify-between'>
                <Button>{deleteButton}</Button>
                <Button>{viewButton}</Button>
            </div>
        </div>
    )
}
