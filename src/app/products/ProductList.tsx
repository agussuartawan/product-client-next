"use client"

import React from "react"
import useSWR from "swr"
import { Product } from "@/app/products/Product"
import { Animation } from "@/components/Animation"

function buildUrl(categories?: string[], name?: string): string {
    let categoryParam: string | null = null
    categories?.map((c) => {
        if (!categoryParam) {
            categoryParam = `?category=${c}`
        } else {
            categoryParam = `${categoryParam}&category=${c}`
        }
    })
    const param = categoryParam ?? "/"
    return `${process.env.PRODUCT_URL}/api/v1/products${param}`
}

export function ProductList(props: {categories?: string[], name?: string}) {
    const { categories, name} = props
    const url = buildUrl(categories, name)
    const { data, error, isValidating } = useSWR(url, (url: string) => fetch(url).then(res => res.json()))
    const products: Product[] = data

    return (
        <Animation/>
        // <div className="grid grid-cols-3 gap-5 mt-5">
        //     {/* products.map((product) =>
        //         <ProductCard
        //             key={product.id}
        //             image={product.imageUrl}
        //             title={product.name}
        //             desc={product.description}
        //             price={product.price}
        //         />)}*/}
        // </div>
    )
}
