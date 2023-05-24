'use client'

import * as React from "react"
import "../../styles.css"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const animation = { duration: 20000, easing: (t: number) => t }

export default function Slider() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: {
      perView: 1,
      spacing: 15,
    },
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })
  return (
    <div className="relative z-10 left-[1000px] bottom-[750px]">
      
      <div className="p-2 bg-zinc-800 rounded-lg">
        <h2 className="text-zinc-200 mb-1 text-center text-lg uppercase">
          Descubra sobre esse universo
        </h2>
      <div ref={ref} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <p className={`uppercase bg-zinc-800/60 w-full
            text-center text-zinc-100 p-2
          `}>
            Lorem ipsum is placeholder
          </p>   
        </div>
        <div className="keen-slider__slide number-slide2">
        <p className={`uppercase bg-zinc-800/60 w-full
            text-center text-zinc-100 p-2
          `}>
            Lorem ipsum is placeholder
          </p>  
        </div>
        <div className="keen-slider__slide number-slide3">
        <p className={`uppercase bg-zinc-800/60 w-full
            text-center text-zinc-100 p-2
          `}>
            Lorem ipsum is placeholder
          </p>  
        </div>
        <div className="keen-slider__slide number-slide4">
        <p className={`uppercase bg-zinc-800/60 w-full
            text-center text-zinc-100 p-2
          `}>
            Lorem ipsum is placeholder
          </p>  
        </div>
        <div className="keen-slider__slide number-slide5 cursor-pointer">
        <p className={`uppercase bg-zinc-800/60 w-full
            text-center text-zinc-100 p-2
          `}>
            Lorem ipsum is placeholder
          </p>  
        </div>
        <div className="keen-slider__slide number-slide6">
        <p className={`uppercase bg-zinc-800/60 w-full
            text-center text-zinc-100 p-2
          `}>
            Lorem ipsum is placeholder
          </p>  
        </div>
        </div>
      </div>
    </div>
  )
}