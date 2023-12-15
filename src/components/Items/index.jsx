"use client"

import styles from '@/styles/items.module.sass'
import Image from 'next/image'
import frame from '../../../public/Frame.png'
import frameW from '../../../public/FrameW.png'
import ferra from '../../../public/ferra.png'
import vidra from '../../../public/vidra.png'
import material from '../../../public/material.png'
import materialP from '../../../public/materialP.png'

export default function Items() {
  return (
    <div className={styles.items}>
      <div>
        <span>PRODUTOS</span>
        <div>
          <Image src={vidra} width={32} height={32} alt='vidra'/>
          <p>Vidrarias e Equipamentos</p>
        </div>
        <Image src={frame} width={100} height={70} alt='frame'/>
      </div>
      <div>
        <span>QUÍMICOS</span>
        <div>
          <div style={{width: '32px'}}>
            <Image src={material} width={16} height={32} alt='material'/> 
            <Image src={materialP} width={8} height={16} alt='material'/> 
          </div>
          <p>Materiais Químicos</p>
        </div>
        <Image src={frameW} width={100} height={70} alt='frame'/>
      </div>
      <div>
        <span>LABORATÓRIOS</span>
        <div>
          <Image src={ferra} width={32} height={32} alt='ferra'/>
          <p>Ferramentas e utensílios</p>
        </div>
        <Image src={frame} width={100} height={70} alt='frame'/>
      </div>
    </div>
  )
}