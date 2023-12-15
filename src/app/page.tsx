"use client"

import styles from '@/styles/page.module.sass'
import { Header } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { change } from '@/store/slice'
import { useEffect } from 'react'

export default function Home() {
  const { products, dropDown } = useSelector((state: RootState) => state.products)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(change())
  }, [])

  return (
    <main className={styles.main}>
      <Header/>
      <section className={`${!dropDown && styles.section}`}>
        {
          products.length ? 
          <ul>
            {products.map((product) => 
              <li key={product._id}>{product.name}</li>
            )}
          </ul> 
          : <p>Nenhum produto encontrado...</p>
        }
      </section>
    </main>
  )
}
