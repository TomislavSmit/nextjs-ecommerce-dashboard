'use client'

import { addProduct, deleteProduct } from '@/lib/api/products'
import { Product } from '@/lib/types/products'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import CardItem from '../common/CardItem'
import Modal from '../common/Modal'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

export default function ProductsPage({ products }: { products: Product[] }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')

    const handleAddProduct = async () => {
        const newProduct: Product = {
            id: Date.now(),
            title,
            price,
            description,
            category,
        }

        const isAdded = await addProduct(newProduct)

        if (isAdded) {
            window.location.reload()
        }
        setIsModalOpen(false)
    }

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
            <div className='border p-4 rounded-lg shadow flex flex-col items-center justify-center space-y-4 max-w-[300px]'>
                <Plus className='w-6 h-6' />
                <Button onClick={() => setIsModalOpen(true)}>
                    Add Product
                </Button>
            </div>

            {products.map((product) => (
                <CardItem
                    key={product.id}
                    title={product.title}
                    image={product.image || ''}
                    deleteButton='Delete'
                    handleDelete={() => handleDelete(product.id)}
                    viewButton={
                        <Link href={`/dashboard/products/${product.id}`}>
                            View
                        </Link>
                    }
                />
            ))}

            <Modal
                title='Add New Product'
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            >
                <div className='space-y-4'>
                    <Input
                        placeholder='Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Input
                        placeholder='Price'
                        type='number'
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                    />
                    <Input
                        placeholder='Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Input
                        placeholder='Category'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    <Button onClick={handleAddProduct}>Save</Button>
                </div>
            </Modal>
        </div>
    )
}
