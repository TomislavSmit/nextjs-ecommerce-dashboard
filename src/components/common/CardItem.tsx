'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ReactNode } from 'react'

interface CardItemProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    image?: string
    deleteButton: ReactNode
    viewButton: ReactNode
    handleDelete?: () => void
}

export default function CardItem({
    children,
    title,
    image,
    deleteButton,
    viewButton,
    handleDelete,
}: CardItemProps) {
    return (
        <div className='flex justify-between flex-col border p-4 rounded-lg shadow max-w-[300px]'>
            <h2 className='font-semibold mb-2 line-clamp-2'>{title}</h2>
            {image && (
                <Image
                    width={200}
                    height={200}
                    src={image}
                    alt={title}
                    className='w-full h-40 object-contain mb-4'
                />
            )}
            {children}
            <div className='flex justify-between'>
                <Button onClick={handleDelete} className='cursor-pointer'>
                    {deleteButton}
                </Button>
                <Button>{viewButton}</Button>
            </div>
        </div>
    )
}
