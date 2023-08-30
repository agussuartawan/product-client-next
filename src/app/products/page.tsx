"use client"

import { ProductList } from "@/app/products/ProductList"
import React from "react"
import useSWR from "swr"
import { Animation } from "@/components/Animation"

interface Category {
    categories: string[]
}

export default function Product() {
    let categoryArray: string[] = []
    let name: string

    const { data, error, isValidating } = useSWR(
        `${process.env.PRODUCT_URL}/api/v1/products/categories`,
        (url: string) => fetch(url).then(res => res.json())
    )
    console.log(data, error)

    const filterByCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
        const category = event.target.value
        if (event.target.checked) {
            categoryArray.push(category)
        } else {
            categoryArray = categoryArray.filter((e) => e != category)
        }
    }

    return (
        <main className="flex flex-col items-center justify-between p-16">
            <aside
                id="default-sidebar"
                className="fixed top-16 left-3 mt-5 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="ProductList"
            >
                <div className="px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <svg
                                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 21"
                                >
                                    <path
                                        d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path
                                        d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span className="ml-3">Category</span>
                            </a>
                        </li>
                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                        { isValidating ? <Animation/> : data.categories.map((c: string, index: number) =>
                            <div key={index} className="flex items-center mb-4 px-2">
                                <input
                                    onChange={filterByCategory}
                                    id={`checkbox-${index}`}
                                    type="checkbox"
                                    value={c}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    htmlFor={`checkbox-${index}`}
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    {c}
                                </label>
                            </div>
                        )}
                    </ul>
                </div>
            </aside>
            <ProductList categories={categoryArray} name={name} />
        </main>
    )
}
