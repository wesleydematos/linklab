import styles from '@/styles/dropdown.module.sass'
import equip from '../../../public/equip.png'
import term from '../../../public/term.png'
import acess from '../../../public/acess.png'
import inox from '../../../public/inox.png'
import vidr from '../../../public/vidr.png'
import plas from '../../../public/plas.png'
import porc from '../../../public/porc.png'
import Image from 'next/image'

export default function Dropdown() {
  const labs = [
    { name: "Equipamentos", icon: equip },
    { name: "Termômetros", icon: term },
    { name: "Acessórios", icon: acess },
  ]
  const utensils = [
    { name: "Inox e Ferragens", icon: inox },
    { name: "Vidrarias", icon: vidr },
    { name: "Plásticos", icon: plas },
    { name: "Porcelanas", icon: porc },
  ]

  return (
    <div className={styles.dropdown}>
      <div className={styles.border}>
      <h2>Catálogo completo de itens para você</h2>
      <div className={styles.divisor}> 
       <div className={styles.items}>
        <p>Laboratório</p>
          <ul>
            {
              labs.map((lab=>
                <li key={lab.name}>
                  <Image src={lab.icon} width={20} height={20} alt={lab.name}/>
                  <a href='#'>{lab.name}</a>
                </li>  
              ))
            }
          </ul>
       </div>
        <div className={styles.items}>
          <p>Utensílios</p>
          <ul>
            {
              utensils.map((utensil=>
                <li key={utensil.name}>
                  <Image src={utensil.icon} width={20} height={20} alt={utensil.name}/>
                  <a href='#'>{utensil.name}</a>
                </li>  
              ))
            }
          </ul>
        </div>
      </div>
      </div>
    </div>
  )
}