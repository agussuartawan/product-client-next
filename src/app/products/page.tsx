import ProductCard from "@/app/products/ProductCard"
import { Product } from "@/app/products/Product"
import { Metadata } from "next"
import { ProductSidebar } from "@/app/products/ProductSidebar"

export const metadata: Metadata = {
    title: "Product List"
}

interface Category {
    categories: string[]
}

const fetchList = async (): Promise<Product[]> => {
    const data = await fetch(`${process.env.PRODUCT_URL}/api/v1/products`, {cache: "no-cache"})
    return data.json()
}

async function getCategories(): Promise<Category> {
    const res = await fetch(`${process.env.PRODUCT_URL}/api/v1/products/categories`, {cache: "no-cache"})
    return res.json()
}

export default async function Product() {
    const data = await fetchList()
    const category = await getCategories()

    return (
        <main className="flex flex-col items-center justify-between p-16">
            <ProductSidebar categories={category.categories} />
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
        </main>
    )
}
