'use client'

import React from 'react'
import useSWR from 'swr'
import { Product } from '@/app/products/Product'
import { Animation } from '@/components/Animation'
import ProductCard from '@/app/products/ProductCard'
import { useSearchParams } from 'next/navigation'

function buildUrl(categories: string[], name: string | null): string {
    let categoryParam: string | null = null
    categories.map((c) => {
        if (!categoryParam) {
            categoryParam = `?categories=${c}`
        } else {
            categoryParam = `${categoryParam}&categories=${c}`
        }
    })
    let param = '?'
    param += categoryParam ?? ''
    param += name ? `&name=${name}` : ''
    return `${process.env.NEXT_PUBLIC_PRODUCT_URL}/api/v1/products${param}`
}

export function ProductList() {
    const searchParams = useSearchParams()
    const categories = searchParams.getAll('category')
    const name = searchParams.get('name')

    const url = buildUrl(categories, name)
    const { data, isValidating } = useSWR(url, (url: string) =>
        fetch(url).then((res) => res.json()),
    )
    const products: Product[] = data

    return (
        <div>
            {isValidating ? (
                <div className="w-fit">
                    <Animation />
                </div>
            ) : (
                <div className="grid grid-cols-4 gap-3">
                    {products &&
                        products.length > 0 &&
                        products.map((product) => (
                            <ProductCard
                                key={product.id}
                                image={product.imageUrl}
                                title={product.name}
                                price={product.price}
                                productId={product.id}
                            />
                        ))}
                </div>
            )}
        </div>
    )
}
