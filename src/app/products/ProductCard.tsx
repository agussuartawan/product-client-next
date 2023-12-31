'use client'

import NumberInput from '@/components/input/NumberInput'
import currency from '@/helper/currency'
import { useState } from 'react'

type CartBody = {
    qty: number
    productId: string
}

const addCart = async (body: CartBody) => {
    fetch(`${process.env.NEXT_PUBLIC_PRODUCT_URL}/api/v1/carts`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

export default function ProductCard(props: {
    image?: string
    desc?: string
    price?: number
    title?: string
    productId: string
}) {
    const { image, desc, title, price, productId } = props
    const [showQty, setShowQty] = useState(true)
    const [qty, setQty] = useState(0)

    const body: CartBody = { qty, productId }
    if (qty > 0) {
        console.log(JSON.stringify(body))
        addCart(body).catch((err) => console.log(err))
    }

    return (
        <a className="group relative block overflow-hidden rounded-md">
            <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                <span className="sr-only">Wishlist</span>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                </svg>
            </button>

            <img
                src={
                    image ??
                    'https://images.unsplash.com/photo-1580265862291-4251b8c7e836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                }
                alt="product-image"
                className="h-64 w-96 object-cover transition duration-500 group-hover:scale-105 sm:h-72"
            />

            <div className="relative border border-gray-100 bg-white p-6">
                <span className="rounded-2xl whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
                    New
                </span>

                <h3 className="mt-4 text-lg font-medium text-gray-900">
                    {title ?? 'No Title'}
                </h3>

                <p className="mt-1.5 text-sm text-gray-700">
                    {currency(price ?? 0)}
                </p>

                <form className="mt-4">
                    {showQty ? (
                        <NumberInput name="qty" setQty={setQty} />
                    ) : (
                        <button
                            className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                            onClick={() => setShowQty(!showQty)}
                        >
                            Add to Cart
                        </button>
                    )}
                </form>
            </div>
        </a>
    )
}
