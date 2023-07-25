import {  faRobot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Slider from '../../Component/Slider.tsx/Slider';

export default function Usage() {

    // const elements1 = (
    //     <article className="flex items-center flex-col text-text text-center md:space-y-5">
    //         <h4 className='font-light uppercase md:text-lg'>Basic example</h4>
    //         <h2 className='font-black text-3xl md:text-7xl'>Trading Right From TV <br /> Chart</h2>

    //         <p>Using the chart on TradingView.com as terminal for trading on Binance</p>
    //         <span className='bg-colorid3b2eb70d rounded-full px-3 py-1  font-bold'>Swipe to know how</span>
    //     </article>
    // )

    // const element2 = (
    //     <img alt="" src="https://aleeert.com/wp-content/uploads/2021/05/2.png" className='w-full'></img>
    // )


    // const element3 = (
    //     <img alt="" src="https://aleeert.com/wp-content/uploads/2021/05/5.png" className='w-full'></img>
    // )


    // const element4 = (
    //     <img alt="" src="https://aleeert.com/wp-content/uploads/2021/05/4.png" className='w-full'></img>
    // )

    // const elements5 = (
    //     <article className="flex items-center flex-col text-colorid4e749ecb text-center md:space-y-5">
    //         <FontAwesomeIcon icon={faBell} className="h-12" />
    //         <h4 className='font-light uppercase md:text-lg'>Automated trading</h4>
    //         <h2 className='font-black text-3xl md:text-7xl'>Trading by Signals From <br /> TV Indicators</h2>

    //         <p>Ability to use TradingView indicators for trading</p>
    //         <span className='bg-colorid3b2eb70d text-text rounded-full px-3 py-1  font-bold'>Swipe to know how</span>
    //     </article>
    // )

    // const element6 = (
    //     <img alt="" src="https://aleeert.com/wp-content/uploads/2021/05/15.png" className='w-full'></img>
    // )

    // const element7 = (
    //     <img alt="" src="https://aleeert.com/wp-content/uploads/2021/05/13.png" className='w-full'></img>
    // )

    // const element8 = (
    //     <img alt="" src="https://aleeert.com/wp-content/uploads/2021/05/14.png" className='w-full'></img>
    // )


    const elements10 = (
        <article className="flex items-center flex-col text-colorid4e749ecb text-center md:space-y-5">
            <FontAwesomeIcon icon={faRobot} className="h-12" />
            <h4 className='font-light uppercase md:text-lg'></h4>

            <p>I will setup everything for you.</p>
            <h2 className='font-black text-3xl md:text-7xl'>Trading by Signals From<br /> TV Strategies</h2>

            <p>Using a TradingView strategies as trading bots</p>
            <span className='bg-colorid3b2eb70d text-text rounded-full px-3 py-1  font-bold'>Swipe to know how</span>
        </article>
    )


    const element11 = (
        <img alt="" src="https://aleeert.com/wp-content/uploads/2021/05/17.png" className='w-full'></img>
    )
    const element12 = (
        <img alt="" src="https://aleeert.com/wp-content/uploads/2021/05/18.png" className='w-full'></img>
    )

    const element13 = (
        <img alt="" src="https://aleeert.com/wp-content/uploads/2021/05/19.png" className='w-full'></img>
    )


    // const elements20 = (
    //     <article className="flex items-center flex-col text-text text-center md:space-y-5">
    //         <div className='h-0 text-secondary opacity-40 z-0'>
    //             <FontAwesomeIcon icon={faBoltLightning} className="h-60" />
    //         </div>
    //         <h4 className='font-light uppercase md:text-lg z-10'>Advanced example</h4>
    //         <h2 className='font-black text-3xl md:text-7xl z-10'>Trading the Breakout</h2>

    //         <p>Catching the movement regardless of its direction</p>
    //         <span className='bg-colorid3b2eb70d text-text rounded-full px-3 py-1 z-10 font-bold'>Swipe to know how</span>
    //     </article>
    // )

    // const element21 = (
    //     <img alt="" src="https://aleeert.com/wp-content/uploads/2021/05/7.png" className='w-full'></img>
    // )
    // const element22 = (
    //     <img alt="" src="https://aleeert.com/wp-content/uploads/2021/05/8.png" className='w-full'></img>
    // )

    // const element23 = (
    //     <img alt="" src="https://aleeert.com/wp-content/uploads/2021/05/9.png" className='w-full'></img>
    // )




    return (
        <>
            {/* <div className='w-full flex justify-center items-center'>
                <div className='w-full max-w-6xl bg-whitebord flex items-center flex-col py-16'>
                    <img src={usage} alt=""  />
                    <section className='w-full h-full p-3 mt-16' id="trading-breakout">
                        <Slider>
                            <div className='w-full  items-center flex justify-center h-full pointer-events-none'>
                                {elements1}
                            </div>
                            <div className='w-full  items-center flex justify-center h-full pointer-events-none'>
                                {element2}
                            </div>
                            <div className='w-full  items-center flex justify-center h-full pointer-events-none'>
                                {element3}
                            </div>
                            <div className='w-full  items-center flex justify-center h-full pointer-events-none'>
                                {element4}
                            </div>
                        </Slider>
                    </section>
                </div>
            </div> */}

            {/* <div className='w-full flex justify-center items-center bg-text '>
                <div className='w-full max-w-6xl flex items-center flex-col py-16'>

                    <section className='w-full h-full p-3 mt-16' id="signals-from-indicators" >
                        <Slider>
                            <div className='w-full  items-center flex justify-center h-full pointer-events-none'>
                                {elements5}
                            </div>
                            <div className='w-full  items-center flex justify-center h-full pointer-events-none'>
                                {element6}
                            </div>
                            <div className='w-full  items-center flex justify-center h-full pointer-events-none'>
                                {element7}
                            </div>
                            <div className='w-full  items-center flex justify-center h-full pointer-events-none'>
                                {element8}
                            </div>
                        </Slider>
                    </section>
                </div>
            </div> */}

            <div className='w-full flex justify-center items-center  bg-primary' >
                <div className='w-full max-w-6xl flex items-center flex-col py-16'>

                    <section className='w-full h-full p-3 mt-16' id="signals-from-strategies">
                        <Slider>
                            <div className='w-full  items-center flex justify-center h-full pointer-events-none'>
                                {elements10}
                            </div>
                            <div className='w-full  items-center flex justify-center h-full pointer-events-none'>
                                {element11}
                            </div>
                            <div className='w-full  items-center flex justify-center h-full pointer-events-none'>
                                {element12}
                            </div>
                            <div className='w-full  items-center flex justify-center h-full pointer-events-none'>
                                {element13}
                            </div>
                        </Slider>
                    </section>
                </div>
            </div>
            <div className='w-full flex justify-center  bg-whitebord items-center' >
                {/* <div className='w-full max-w-6xl items-center flex-col py-16'>

                    <section className='w-full h-full p-3 mt-16'>
                        <Slider>
                            <div className='w-full  items-center flex justify-center h-full pointer-events-none'>
                                {elements20}
                            </div>
                            <div className='w-full  items-center flex justify-center h-full pointer-events-none'>
                                {element21}
                            </div>
                            <div className='w-full  items-center flex justify-center h-full pointer-events-none'>
                                {element22}
                            </div>
                            <div className='w-full  items-center flex justify-center h-full pointer-events-none'>
                                {element23}
                            </div>
                        </Slider>
                    </section>
                </div> */}
            </div>
        </>
    )
}
