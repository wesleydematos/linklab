"use client"

import styles from '@/styles/page.module.sass'
import { Header, Items, ProductCard } from '../components'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { useEffect, useState } from 'react'
import made from '../../public/made.png'
import Image from 'next/image'
import axios from 'axios'

interface iProduct {
  _id: string
  name: string
  image: string
  value: number
  note: number
}

export default function Home() {
  const { dropDown } = useSelector((state: RootState) => state.products)
  const [products, setProducts] = useState([])

  async function getData(){
    const { data } = await axios.get("/api/products")
    setProducts(data)
  }

  useEffect(()=>{
    getData()
  }, [])

  return (
    <main className={styles.main}>
      <Header/>
      <section>
        <div className={styles.items}>
          <div className={styles.bg_blue}>
            <Image src={made} width={150} height={150} alt='made with science'/>
          </div>
          <div className={styles.bg}/>
          <div className={`${dropDown ? styles.items_drop : styles.normal_items}`}>
            <Items/>
          </div>
        </div>
      </section>
      <section className={`${!dropDown && styles.section} ${styles.products}`}>
        {
          products.length ? 
          <>
            <h1>PRODUTOS</h1>
            <ul>
              {
                products.map((product: iProduct)=> <ProductCard product={product} key={product._id}/>)
              }
            </ul>
            <Image src={made} width={150} height={150} alt='made with science'/>
          </>
          : <p>Nenhum produto encontrado...</p>
        }
      </section>
    </main>
  )
}
