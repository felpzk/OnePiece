import Slider from '@/components/Slider/Slider'
import Template from '@/components/Template/Template'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className={`bg-bg-luffy h-[500px]
          bg-no-repeat bg-[center_45%] opacity-80`} />
      <Template>
        <div className='relative z-10 bottom-[400px] bg-slate-950/20 p-2 rounded-md w-min'>
          <h1 className={`uppercase text-zinc-100
            text-4xl
        `}>One Piece news</h1>
          <div className={`w-[400px] h-[3px] rounded-md bg-red-600`} />
          <p className='w-[380px] text-white text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h2 className=' uppercase text-zinc-100 text-4xl mt-2'>
            And publishing for previewing layouts
          </h2>
          <p className='w-[800px] text-white text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
            ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            , quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            . Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className='w-1/3'>
          <Slider />
        </div>
      </Template>
    </>
  )
}
