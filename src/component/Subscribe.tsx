"use client"

import { requestPermission } from "@/firebase"

const subscribe = () => {
    const body = {
        token: "alsjdhlkajhsdlana;lsdm;lasmdaswjeha",
        device: "WEB"
    }
    fetch("http://localhost:3000/api/v1/notification-tokens", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(async r => {
        const res = await r.json()
        console.log(res)
    })
    .catch(err => console.error(err.json().body))
}
const Subscribe = () => {

    return (<button
        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        onClick={subscribe}>
          <span
              className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Subscribe Notification
          </span>
    </button>)
}

export default Subscribe
