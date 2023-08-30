import React from "react"
import { ProductSidebar } from "@/app/products/ProductSidebar"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Product List"
}

export default function Product() {
    return (
        <main className="flex flex-col items-center justify-between p-16">
            <ProductSidebar/>
        </main>
    )
}
