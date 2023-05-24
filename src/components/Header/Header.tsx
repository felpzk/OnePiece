import Image from 'next/image'
import logo from '../../../public/logo.png'
import { HeaderUseClient } from './HeaderUseClient'

export function Header() {

  return (
    <header className='bg-orange-500 py-2 px-56 flex  items-center justify-between'>
      
      <Image src={logo} alt='Logo' width={200} height={100}/>

      <div>
        <nav>
          <ul className='flex gap-5'>
            <HeaderUseClient />
          </ul>
        </nav>
      </div>
    </header>
  )
}