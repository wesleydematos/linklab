"use client"

import styles from '@/styles/page.module.sass'
import { Header, Items, ProductCard } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { change } from '@/store/slice'
import { useEffect } from 'react'
import made from '../../public/made.png'
import Image from 'next/image'

export default function Home() {
  const { products, dropDown } = useSelector((state: RootState) => state.products)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(change())
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
            <ProductCard/>
          </>
          : <p>Nenhum produto encontrado...</p>
        }
      </section>
    </main>
  )
}
