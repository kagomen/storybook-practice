type Product = {
  id: number
  title: string
  description: string
}

type ProductArray = Product[]

export function Presentational({ products }: { products: ProductArray }) {
  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id} className="border border-black p-2 m-2">
            <h2 className="font-bold">{product.title}</h2>
            <p>{product.description}</p>
          </div>
        )
      })}
    </div>
  )
}
