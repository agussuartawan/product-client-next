"use client"

import { useState } from "react"

export default function NumberInput(props: { name: string }) {
    const { name } = props
    const [value, setValue] = useState(0)

    const increment = () => {
        setValue(value + 1)
    }

    const decrement = () => {
        if (value > 0) {
            setValue(value - 1)
        }
    }

    return (
        <div className="custom-number-input h-10 w-32">
            <label
                htmlFor="custom-input-number"
                className="w-full text-gray-700 text-sm font-semibold sr-only"
            >
                Qty Input
            </label>
            <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                <button
                    onClick={decrement}
                    className="bg-gray-300 text-gray-700 hover:text-gray-700 hover:bg-gray-200 h-full w-20 rounded-l cursor-pointer outline-none"
                >
                    <span className="m-auto text-2xl font-thin">−</span>
                </button>
                <input
                    type="number"
                    className="qty focus:outline-none text-center w-full bg-gray-300 font-semibold text-md md:text-basecursor-default flex items-center text-gray-700 outline-none"
                    name={name}
                    value={value}
                />
                <button
                    onClick={increment}
                    className="bg-gray-300 text-gray-700 hover:text-gray-700 hover:bg-gray-200 h-full w-20 rounded-r cursor-pointer outline-none"
                >
                    <span className="m-auto text-2xl font-thin">+</span>
                </button>
            </div>
        </div>
    )
}
