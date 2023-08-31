"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"

export function SearchInput() {
    const searchParam = useSearchParams()
    const path = usePathname()
    const router = useRouter()
    const [name, setName] = useState(searchParam.get("name"))

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const param = new URLSearchParams(searchParam)
        param.set("name", name ?? "")
        let currentPath = `${path}?${param}`
        router.push(currentPath)
        console.log(currentPath, name)
    }

    return (
        <div className="relative">
            <form onSubmit={(e) => handleSearch(e)}>
                <label htmlFor="Search" className="sr-only">
                    {" "}
                    Search{" "}
                </label>

                <input
                    value={name ?? ""}
                    onChange={(event) => setName(event.currentTarget.value)}
                    type="search"
                    id="Search"
                    placeholder="Search for..."
                    className="w-full p-3 rounded-md bg-gray-100 py-2.5 pe-10 shadow-sm sm:text-sm"
                />

                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                    <button
                        type="submit"
                        className="text-gray-600 hover:text-gray-700"
                    >
                        <span className="sr-only">Search</span>

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
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                    </button>
                </span>
            </form>
        </div>
    )
}
