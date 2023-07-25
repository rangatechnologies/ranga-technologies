import React from 'react'
import comparison from '../../Imgs/features.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck,  faClose } from '@fortawesome/free-solid-svg-icons'

export default function Comparison() {

  const Line = (props: { text: string }) => (
    <div className='w-full h-full flex border-b-2 border-secondary'>
      <div className='flex md:text-xl font-black flex-col text-text w-full py-8 '>
        {props.text}
      </div>
      <div className='w-32 md:w-1/4 text-xs text-center text-secondary bg-colorid7e810469 h-full py-6'>
        <FontAwesomeIcon icon={faCheck} className='h-10' />
      </div>
      <div className='w-32 md:w-1/4 text-xs text-center text-colorid4e749ecb bg-colorid7e810469 h-full py-6'> <FontAwesomeIcon icon={faClose} className='h-10' /></div>
    </div>
  )

  const items = [
    {
      text: "Trading by % or $ of balance",

    },
    {
      text: "Trading by % or $ of balance",

    },
    {
      text: "0% commission",

    },
    {
      text: "Strong security",

    },
    {
      text: "Instant signal execution",

    },
    {
      text: "Any TradingView indicator can be trading robot now",
    },
  ]
  return (
    <div className='w-full px-3 h-fit py-12 flex justify-center items-center flex-col bg-colorid3b2eb70d'>
      <img src={comparison} className="h-32 md:h-44" alt="" />
      <div className='w-full max-w-6xl pt-24'>
        <div className='w-full flex'>
          <div className='flex flex-col text-text w-full '>
          </div>
          <div className='w-32 md:w-1/4 text-xs md:text-lg text-center text-text bg-colorid7e810469 h-full pt-12'>Trading via TV + Aleeert</div>
          <div className='w-32 md:w-1/4 text-xs  md:text-lg text-center text-text bg-colorid7e810469 h-full pt-12'>Classic trading on exchange</div>
        </div>
        {items.map(item => (
          <Line {...item} key = {item.text}/>
        ))}
      </div>

      <div className='w-full flex justify-center items-center h-64'>
        <button className='text-primary bg-colorid3b2eb70d hover:bg-primary uppercase hover:text-colorid4e749ecb border-8 border-primary transition-all py-2  px-6 md:py-4 md:px-16 font-black text-lg md:text-3xl'>Get Started</button>
      </div>
    </div>
  )
}
