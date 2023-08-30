export default function currency(value: number): string {
    const formatter = Intl.NumberFormat("en-ID", {
        style: "currency",
        currency: "IDR",
    })
    return formatter.format(value)
}
