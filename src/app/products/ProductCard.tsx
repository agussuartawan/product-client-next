"use client"

import currency from "@/helper/currency"
import NumberInput from "../../components/input/NumberInput"

export default function ProductCard(props: {
    image: string
    desc: string
    price: number
    title: string
}) {
    const { image, desc, title, price } = props

    return (
        <div className="w-96 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img
                    className="rounded-t-lg object-cover h-72 w-96"
                    src={image}
                    alt=""
                />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {desc}
                </p>

                <div className="flex items-center justify-between">
                    <span className="text-1xl font-bold text-gray-900 dark:text-white">
                        {currency(price)}
                    </span>
                </div>

                <div className="flex items-center justify-between pt-2">
                    <NumberInput name="qty" />
                    <a
                        href="#"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add To Cart
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}
