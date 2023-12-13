"use client"

import styles from '@/styles/page.module.sass'
import { Header } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { change } from '@/store/slice'

export default function Home() {
  const products = useSelector((state: RootState) => state.products.products)
  const dispatch = useDispatch()

  return (
    <main className={styles.main}>
      <Header/>
      <p>Home</p>
      <button onClick={() => dispatch(change())}>mudar produtos</button>
      {
        products.length ? <>{products[0].name}</> : <>0 produtos</>
      }
    </main>
  )
}
