"use client"

import Image from 'next/image'
import { useState } from 'react'
import { HeaderModal, Dropdown } from '@/components'
import styles from '@/styles/header.module.sass'
import logo from '../../../public/halogenn.png'
import menu from '../../../public/menu.png'
import budgets from '../../../public/budgets.png'
import bud from '../../../public/bud.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { setDropdown } from '@/store/slice'

export default function Header() {
  const [modal, setModal] = useState(false)
  const dropDown = useSelector((state: RootState) => state.products.dropDown)
  const dispatch = useDispatch()

  return (
    <>
      <header className={styles.header}>
        <Image src={logo} width={144} height={31} alt='Logo halogenn' priority/>
        <div className={styles.mobile_items}>
          <Image src={budgets} width={41} height={41} alt='Budgets'/>
          <Image src={menu} width={29} height={29} alt='Menu hamburguer' onClick={()=> setModal(!modal)}/> 
        </div>
        <nav>
          <div>
            <a href='#'>Início</a>
            <a href='#' onClick={()=> dispatch(setDropdown())}>Produtos <span> v</span></a>
            <a href='#'>Laudos</a>
            <a href='#'>Sobre Nós</a>
            <a href='#'>Certificações</a>
            <a href='#'>Contato</a>
          </div>
          <a href="#">
            <Image width={15} height={15} src={bud} alt='budget'/>
            Orçamento
          </a>
        </nav>
      </header>
      {modal && <HeaderModal/>}
      {dropDown && <Dropdown/>}
      <section className={styles.section}>
        <h1>
          Qualidade e expertise em produtos <span>químicos e acessórios</span>
        </h1>
        <p>
          Estamos preparados para te entender e atender da melhor forma para suprir 
          todas as suas demandas em químicos e similares.
        </p>
      </section>
    </>
  )
}