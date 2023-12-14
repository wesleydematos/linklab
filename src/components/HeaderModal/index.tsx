import style from '@/styles/headerModal.module.sass'
import equip from '../../../public/equip.png'
import term from '../../../public/term.png'
import acess from '../../../public/acess.png'
import inox from '../../../public/inox.png'
import vidr from '../../../public/vidr.png'
import plas from '../../../public/plas.png'
import porc from '../../../public/porc.png'
import Image from 'next/image'

export default function HeaderModal() {
  const pages = ["Início", "Laudos", "Sobre Nós", "Certificações", "Contato"]
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
    <div className={style.modal}>
      <p>Navegue por nosso site</p>
      <div>
        {
          pages.map((page) => 
            <a href="#"key={page}>{page}</a>
          )
        }
      </div>
      <p>Catálogo completo de itens para você</p>
      <ul>
        <p>Laboratório</p>
        {
          labs.map((lab=>
            <li key={lab.name}>
              <Image src={lab.icon} width={20} height={20} alt={lab.name}/>
              {lab.name}
            </li>  
          ))
        }
      </ul>
      <ul>
        <p>Utensílios</p>
        {
          utensils.map((utensil=>
            <li key={utensil.name}>
              <Image src={utensil.icon} width={20} height={20} alt={utensil.name}/>
              {utensil.name}
            </li>  
          ))
        }
      </ul>
    </div>
  )
}