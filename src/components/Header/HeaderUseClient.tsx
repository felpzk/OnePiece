'use client'

import Link from 'next/link'
import { useState } from 'react'

export function HeaderUseClient() {

  const [active, setActive] = useState(null)

  const handleActivedClick = (item: any) => {
    setActive(item)
  }

  return (
    <>
    
      <li
        onClick={() => handleActivedClick('bando')}
        className={`text-zinc-100 font-bold hover:text-teal-400
          decoration-teal-300 delay-75
          ${active == 'bando' ? 'underline' : ''} decoration-wavy
        `}>
        <Link href={`#`}>BANDO</Link>
      </li>
      <li
        onClick={() => handleActivedClick('rec')}
        className={`text-zinc-100 font-bold hover:text-teal-400
          decoration-teal-300 delay-75
          ${active == 'rec' ? 'underline' : ''} decoration-wavy
        `}>
        <Link href={{pathname: '/recompensa'}}>RECOMPENSAS</Link>
      </li>
      <li
        onClick={() => handleActivedClick('frota')}
        className={`text-zinc-100 font-bold hover:text-teal-400
          decoration-teal-300 delay-75
          ${active == 'frota' ? 'underline' : ''} decoration-wavy
        `}>
        <Link href={`#`}>FROTA</Link>
      </li>
    </>
  )
}