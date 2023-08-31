import { FaCartShopping } from "react-icons/fa6"

interface Data {
    data: number
}

const getCount = async (): Promise<Data> => {
    const data = await fetch(
        `${process.env.NEXT_PUBLIC_PRODUCT_URL}/api/v1/carts/count`,
        { cache: "no-cache" },
    )
    return data.json()
}

export default async function CartButton() {
    const res = await getCount()
    return (
        <a
            href="#"
            className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-teal-600 rounded-lg focus:ring-blue-300"
        >
            <FaCartShopping />
            <span className="sr-only">Cart</span>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2">
                {res.data}
            </div>
        </a>
    )
}
