import React from 'react'
import { Metadata } from 'next'
import { ProductList } from '@/app/products/ProductList'
import { useRouter } from 'next/navigation'

export const metadata: Metadata = {
    title: 'Product List',
}

export default function Product() {
    return (
        <main className="px-3 py-16">
            <ProductList />
        </main>
    )
}
