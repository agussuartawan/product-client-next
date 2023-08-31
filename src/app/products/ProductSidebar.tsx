"use client"

import { Animation } from "@/components/Animation"
import React from "react"
import useSWR from "swr"
import { SearchInput } from "@/components/input/SearchInput"
import { useRouter, useSearchParams } from "next/navigation"

interface Category {
    categories: string[]
}

const url = `${process.env.NEXT_PUBLIC_PRODUCT_URL}/api/v1/products/categories`
const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function ProductSidebar({ handleChange }: any) {
    const searchParam = useSearchParams()
    let categoryArray = searchParam.getAll("category")
    let name: string
    const router = useRouter()
    const { data, isValidating } = useSWR(url, fetcher)

    const filterByCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
        const category = event.target.value
        if (event.target.checked) {
            categoryArray.push(category)
        } else {
            categoryArray = categoryArray.filter((e) => e != category)
        }

        let query: string = "?"
        categoryArray.map((c) => {
            query += `category=${c}&`
        })

        router.push(`/products${query}`)
    }

    return (
        <div className="flex flex-col h-1/3 justify-between border-e bg-white mx-5 my-5 w-1/6 rounded-md">
            <div className="px-4 pt-6">
                <SearchInput />
            </div>
            <div className="px-4 pt-3">
                <ul className="mt-3 space-y-1">
                    <li>
                        <a className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                            Category
                        </a>
                    </li>
                </ul>
                <div className="py-2">
                    {isValidating ? (
                        <Animation />
                    ) : (
                        data &&
                        data.categories.map((c: string, index: number) => (
                            <div key={index} className="flex item-center mb-2">
                                <input
                                    id={`category-${index}`}
                                    type="checkbox"
                                    className="ml-2"
                                    value={c}
                                    onChange={filterByCategory}
                                    checked={categoryArray.includes(c)}
                                />
                                <label
                                    htmlFor={`category-${index}`}
                                    className="px-2 text-black"
                                >
                                    {c}
                                </label>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}
