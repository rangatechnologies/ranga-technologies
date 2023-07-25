import React from 'react'
import comparison from '../../Imgs/features.svg'
import hand from '../../Imgs/Comp/hand.svg'
import graph from '../../Imgs/Comp/graph.svg'
import perc from '../../Imgs/Comp/perc.svg'
import shild from '../../Imgs/Comp/shild.svg'
import time from '../../Imgs/Comp/time.svg'
import robo from '../../Imgs/Comp/robo.svg'

export default function Features() {

  const Line = (props: { text1: string, text2: string, img: string }) => (
    <div className='w-full flex mb-11'>
      <img alt="" src={props.img} className="h-12 md:h-20 pr-10" />
      <div className='flex flex-col text-text pb-10 border-b-2 border-secondary w-full mr-2'>
        <div className=' text-xl md:text-4xl font-black'>{props.text1}</div>
        <div className='mdLtext-xl font-light'>{props.text2}</div>
      </div>
    </div>
  )

  const items = [
    {
      text1: "Turn off the PC and rest your life",
      text2: "24*7 Everything is automatically working on the cloud.",
      img: robo,
    },
    {
      text1: "You can change Binance(exchange) parameters from Tradingview",
      text2: "Change Trading pairs, Order percentage, Leverage, Timeframe, SL & TP percentages from the Tradingview interface.",
      img: graph,
    },
    {
      text1: "Easy to use",
      text2: "Everything is explained and implemented by us.",
      img: hand,

    },
    {
      text1: "Trading by % or $ of balance",
      text2: "Time saver. No need to calculate the value of each asset. It will be done automatically.",
      img: perc,
    },
    
    {
      text1: "Strong security",
      text2: "API keys of each user are encrypted by unique user keys that only the user has. So no one has access to API keys. Including me.",
      img: shild,
    },
    {
      text1: "Instant signal execution",
      text2: "Order execute within 300 millisecondson your exchange (Because we are accessing directly from exchange and developing everything from scratch)",
      img: time,
    },
 
  ]
  return (
    <div className='w-full pl-3  py-12 flex justify-center items-center flex-col bg-colorid7e810469'>
      <img alt="" src={comparison} className="h-32 md:h-44" />
      <div className='w-full max-w-3xl pt-24'>
        {items.map(item => (
          <Line {...item} key={item.text1} />
        ))}
      </div>
    </div>
  )
}
