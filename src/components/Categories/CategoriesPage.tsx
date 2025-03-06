'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { CategoryProducts } from '@/types/categories'
import Link from 'next/link'

export default function CategoriesPage({
    categories,
}: {
    categories: CategoryProducts
}) {
    console.log(categories)

    return (
        <Accordion type='multiple' className='w-full space-y-4'>
            {Object.entries(categories).map(([category, products]) => (
                <AccordionItem key={category} value={category}>
                    <AccordionTrigger>{category}</AccordionTrigger>
                    <AccordionContent className='border-t p-4'>
                        <ul className='space-y-2'>
                            {products.map((product) => (
                                <li key={product.id}>
                                    <Link
                                        href={`/dashboard/products/${product.id}`}
                                        className='text-blue-500 hover:underline'
                                    >
                                        {product.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
