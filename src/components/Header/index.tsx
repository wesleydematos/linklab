"use client"

import Image from 'next/image'
import { useState } from 'react'
import { HeaderModal } from '@/components'
import styles from '@/styles/header.module.sass'
import logo from '../../../public/halogenn.png'
import menu from '../../../public/menu.png'
import budgets from '../../../public/budgets.png'

export default function Header() {
  const [modal, setModal] = useState(false)

  return (
    <>
      <header className={styles.header}>
        <Image src={logo} width={144} height={31} alt='Logo halogenn' priority/>
        <div className={styles.mobile_items}>
          <Image src={budgets} width={41} height={41} alt='Budgets'/>
          <Image src={menu} width={29} height={29} alt='Menu hamburguer' onClick={()=> setModal(!modal)}/> 
        </div>
      </header>
      {modal && <HeaderModal/>}
    </>
  )
}