import ProductCard from "@/app/products/ProductCard"
import { Product } from "@/app/products/Product"
import { Metadata } from "next"
import { cache } from "browserslist"

export const metadata: Metadata = {
    title: "Product List"
}

const fetchList = async (): Promise<Product[]> => {
    const data = await fetch("http://localhost:3069/api/v1/products", {cache: "no-cache"})
    return data.json()
}

export default async function Home() {
    const data = await fetchList()

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-16">
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
