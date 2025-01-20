import { Presentational } from "./presentational"

export async function Container() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const res = await fetch("https://dummyjson.com/products")
  const { products } = await res.json()

  return <Presentational products={products} />
}
