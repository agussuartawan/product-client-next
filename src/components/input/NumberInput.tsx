'use client'

import { ChangeEvent, useState } from 'react'
import { FaCheck } from 'react-icons/fa6'

export default function NumberInput(props: { name: string; setQty: any }) {
    const { name, setQty } = props
    const [value, setValue] = useState(0)

    const increment = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        setValue(value + 1)
    }

    const decrement = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        if (value > 0) {
            setValue(value - 1)
        }
    }

    const handleChange = (e: ChangeEvent<HTMLElement>) => {
        setValue(e.currentTarget.value)
    }

    const handleAdd = (e: any) => {
        e.preventDefault()
        setQty(value)
    }

    return (
        <div className="flex flex-row justify-between">
            <div className="custom-number-input h-10 w-32">
                <label
                    htmlFor="custom-input-number"
                    className="w-full text-gray-700 text-sm font-semibold sr-only"
                >
                    Qty Input
                </label>
                <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent">
                    <button
                        onClick={decrement}
                        className="bg-slate-300 text-gray-700 hover:text-gray-700 hover:bg-gray-200 h-full w-20 rounded-l cursor-pointer outline-none"
                    >
                        <span className="m-auto text-2xl font-thin">−</span>
                    </button>
                    <input
                        type="number"
                        className="qty focus:outline-none text-center w-full bg-gray-300 font-semibold text-md md:text-basecursor-default flex items-center text-gray-700 outline-none"
                        name={name}
                        value={value}
                        onChange={handleChange}
                    />
                    <button
                        onClick={increment}
                        className="bg-gray-300 text-gray-700 hover:text-gray-700 hover:bg-gray-200 h-full w-20 rounded-r cursor-pointer outline-none"
                    >
                        <span className="m-auto text-2xl font-thin">+</span>
                    </button>
                </div>
            </div>
            <button
                className="rounded bg-yellow-400 px-4 h-10 text-bold transition hover:scale-105"
                onClick={handleAdd}
            >
                <FaCheck />
            </button>
        </div>
    )
}
