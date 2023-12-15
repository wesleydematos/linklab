"use client"

import Image from "next/image"

interface iProduct {
  _id: string
  name: string
  image: string
  value: number
  note: number
}

export default function ProductCard ({ product }: { product: iProduct }) {
  return (
    <li>
      <Image src={product.image} width={300} height={150} alt={product.name}/>
      <div>
        <div>
          <p>{product.name}</p>
          <span>Nota: {product.note % 1 === 0 ? `${product.note}.0` : product.note}</span>
        </div>
        <p>R${product.value},00</p>
      </div>
    </li>
  )
}