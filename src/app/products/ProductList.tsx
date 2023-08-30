import { Product } from "@/app/products/Product"
import { Metadata } from "next"
import ProductCard from "@/app/products/ProductCard"
import React from "react"

export const metadata: Metadata = {
    title: "Product List"
}

export async function fetchList(categories: string[], name: string): Promise<Product[]> {
    let categoryParam: string | null = null
    categories?.map((c) => {
        if (!categoryParam) {
            categoryParam = `?category=${c}`
        } else {
            categoryParam = `${categoryParam}&category=${c}`
        }
    })
    const param = categoryParam ?? "/"
    const url = `${process.env.PRODUCT_URL}/api/v1/products${param}`
    const data = await fetch(url, {cache: "no-cache"})
    return data.json()
}

export async function ProductList(props: {categories: string[], name: string}) {
    const { categories, name} = props
    const data = await fetchList(categories, name)

    return (
        <div className="grid grid-cols-3 gap-5 mt-5">
            {data.map((product) =>
                <ProductCard
                    key={product.id}
                    image={product.imageUrl}
                    title={product.name}
                    desc={product.description}
                    price={product.price}
                />)}
        </div>
    )
}
