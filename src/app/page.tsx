"use client"

import styles from '@/styles/page.module.sass'
import { Header } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { change } from '@/store/slice'
import { useEffect } from 'react'

export default function Home() {
  const products = useSelector((state: RootState) => state.products.products)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(change())
  }, [])

  return (
    <main className={styles.main}>
      <Header/>
      {
        products.length ? 
        <ul>
          {products.map((product) => 
            <li key={product._id}>{product.name}</li>
          )}
        </ul> 
        : <p>Nenhum produto encontrado...</p>
      }
    </main>
  )
}
