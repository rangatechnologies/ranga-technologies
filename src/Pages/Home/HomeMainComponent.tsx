import React, { useLayoutEffect, useRef } from "react";
import whale from "../../Imgs/SVGComponets/whale.svg";
import fish from "../../Imgs/SVGComponets/fish.svg";
import wave from "../../Imgs/SVGComponets/wave.svg";
import captain from "../../Imgs/SVGComponets/captain.svg";
import bitcoin from "../../Imgs/SVGComponets/bitcoin.svg";

import carouselDetails from './carousel.json'


import telegram from "../../Imgs/SVGComponets/telegram.svg";
import facebook from "../../Imgs/SVGComponets/facebook.svg";
import whatsapp from "../../Imgs/SVGComponets/whatsapp.svg";
// import fiverr from "../../Imgs/SVGComponets/insta.svg";
import insta from "../../Imgs/SVGComponets/insta.svg";
import upwork from "../../Imgs/SVGComponets/upwork.svg";
import "./home.css";

import useIntersectionObserver from "../../hooks/useIntersectionObserver";

import Carousel from "../../Component/Carousel/Carousel";

import webDevelopment from '../../Imgs/services design-01.png'
import mobileDevelopment from '../../Imgs/services design-02.png'
import blockchainDevelopment from '../../Imgs/services design-03.png'



import CASE1 from '../../Imgs/services design-04.png'
import CASE2 from '../../Imgs/services design-05.png'
import CASE3 from '../../Imgs/services design-06.png'
import CASE4 from '../../Imgs/services design-07.png'
import CASE5 from '../../Imgs/services design-08.png'
import CASE6 from '../../Imgs/services design-09.png'



export default function HomeMainComponent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const btcRef = useRef<HTMLImageElement>(null);
  const whaleRef = useRef<HTMLImageElement>(null);
  const fishRef = useRef<HTMLImageElement>(null);
  const waveRef = useRef<HTMLImageElement>(null);

  const entry = useIntersectionObserver(containerRef, {});



  const renderAnimation = (ev: MouseEvent | { clientX: number, clientY: number }) => {
    const { clientX: x, clientY: y } = ev;

    btcRef.current!.style.transform = `translate(${-30 + x / 200}px, ${180 + -y / 200
      }px)`;

    whaleRef.current!.style.transform = `translate(${-100 + +x / 100}px, ${250 + -y / 100
      }px)`;

    fishRef.current!.style.transform = `translate(${-50 + x / 20}px, ${500 + -y / 20
      }px)`;

    waveRef.current!.style.transform = `translate(${10 + x / 10}px, ${300 + -y / 10
      }px)`;
  };

  const mouseMoveHandler = (ev: MouseEvent) => {
    window.requestAnimationFrame(() => renderAnimation(ev));
  };

  useLayoutEffect(() => {
    renderAnimation({ clientX: 0, clientY: 0 });
    setTimeout(() => {
      if (entry?.isIntersecting) {
        window.addEventListener("mousemove", mouseMoveHandler);
      }
    }, 2000); // trigger after fading animation end

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entry]);

  const mainTitle = (
    <div className="text-secondary text-4xl md:text-5xl font-black">
      <span style={{color:'#ABEA7C'}}>Web</span><br />
      <span style={{color:'#B2D7DA'}}>Mobile App</span> <br />
      <span style={{color:'#F2E34C'}}>Blockchain</span><br />
      <span style={{color:'white'}}>Development</span> 
      
    </div>
  );
  const subTitle = (
    <div className="text-colorid3b2eb70d text-lg font-black">
      World-Class Digital Products. <br />
      On-time.<br/>
      On-budget.<br />
      On-point.
    </div>
  );
  return (
    <div>
      <div
        ref={containerRef}
        className="w-full h-screen md:h-homeBaner bg-gradient-to-t overflow-hidden from-gradiant2 to-gradiant1 flex justify-start flex-col items-center"
      >

        <div className="max-w-6xl justify-center flex items-start flex-col  w-full">
          <div className="w-full h-40 md:h-0 flex md:flex-row flex-col overflow-visible font-sans items-center md:items-start">
            {/* Web */}
            <div className=" hidden md:flex   z-10">
              <div
                className="border-primary rounded-full flex overflow-visible justify-center items-center"
                style={{
                  height: 600,
                  width: 600,
                  borderWidth: 15,
                  transform: `translate(${10}px, ${0}px)`,
                }}
              >
                <div
                  className="bg-primary drop-shadow-2xl md:h-avatar md:w-avatar hidden md:flex items-center p-1 rounded-full"
                  style={{
                    transform: `translate(${-70}px, ${-100}px)`,
                    width: 175,
                  }}
                >
                  <img alt="" src={captain} style={{ height: 130 }} className="" />
                </div>
                <div
                  style={{
                    height: 600,
                    width: 600,
                  }}
                  className="text-start justify-center flex items-start pl-12 flex-col"
                >
                  {mainTitle}
                  {subTitle}
                  <div className="pt-3 text-colorid7e810469 font-normal">
                    Lets Talk:
                  </div>
                  <div style={{paddingBottom: 20, paddingTop:10 }}>
                    {/* <button onClick={() => window.open("ranganaupul@gmail.com")}  className="button button1" >
                      <div  className="img" ><img  alt="" src={gmail} /></div>                        
                    </button> */}
                    <button onClick={() => window.open("https://t.me/rangaubot")}  className="button button2" >
                      <div  className="img" ><img  alt="" src={telegram} /></div>                        
                    </button>
                    <button onClick={() => window.open("https://www.facebook.com/RangaTradingBot")}  className="button button3" >
                      <div  className="img" ><img  alt="" src={facebook} /></div>                        
                    </button>
                    <button onClick={() => window.open("https://instagram.com/rangatechnologies?igshid=NGExMmI2YTkyZg==")}  className="button button4" >
                      <div  className="img" ><img  alt="" src={insta} /></div>                        
                    </button>
                    <button onClick={() => window.open("https://www.upwork.com/services/product/automated-trading-bot-for-tradingview-and-binance-exchange-1521022452186038272?ref=project_share")}  className="button button5" >
                      <div  className="img" ><img  alt="" src={upwork} /></div>                        
                    </button>
                    <button onClick={() => window.open("https://wa.me/message/XEABYADPSDL2D1")}  className="button button6" >
                      <div  className="img" ><img  alt="" src={whatsapp} /></div>                        
                    </button>
                    {/* <FontAwesomeIcon onClick={() => window.open("www.google.com")} icon={faPaperPlane} className="transition-all cursor-pointer bg-text rounded-lg p-4 h-7 hover:bg-primary" />
                    <FontAwesomeIcon onClick={() => window.open("www.google.com")} icon={faEnvelope} className="transition-all cursor-pointer bg-text rounded-lg p-4 h-7 hover:bg-primary" /> */}
                  </div>
                </div>
              </div>
            </div> 

            {/* Mobile */}
            <div className=" md:hidden flex z-10">
              <div
                className="border-primary rounded-full flex flex-col overflow-visible justify-center items-center"
                style={{
                  height: 450,
                  width: 450,
                  borderWidth: 15,
                  transform: `translate(${10}px, ${50}px)`,
                }}
              >
                <div
                  className="bg-primary flex h-24 w-24 items-center p-1 rounded-full"
                  style={{
                    transform: `translate(${0}px, ${-50}px)`,
                  }}
                >
                  <img alt="" src={captain} style={{ height: 130 }} className="" />
                </div>
                <div
                  style={{
                    height: 450,
                    width: 450,
                  }}
                  className="text-start justify-center flex items-start pl-12 -translate-y-16 flex-col"
                >
                  {mainTitle}
                  {subTitle}
                  <div className="pt-3 text-sm text-colorid7e810469 font-normal">
                    Lets Talk:
                  </div>
                  <div style={{paddingBottom: 20, paddingTop:10 }}>
                    {/* <button onClick={() => window.open("branganaupul@gmail.com")}  className="button button1" >
                      <div  className="img" ><img  alt="" src={gmail} /></div>                        
                    </button> */}
                    <button onClick={() => window.open("https://t.me/rangaubot")}  className="button button2" >
                      <div  className="img" ><img  alt="" src={telegram} /></div>                        
                    </button>
                    <button onClick={() => window.open("https://www.facebook.com/RangaTradingBot")}  className="button button3" >
                      <div  className="img" ><img  alt="" src={facebook} /></div>                        
                    </button>
                    <button onClick={() => window.open("https://www.fiverr.com/share/9LlRee")}  className="button button4" >
                      <div  className="img" ><img  alt="" src={insta} /></div>                        
                    </button>
                    <button onClick={() => window.open("https://www.upwork.com/services/product/automated-trading-bot-for-tradingview-and-binance-exchange-1521022452186038272?ref=project_share")}  className="button button5" >
                      <div  className="img" ><img  alt="" src={upwork} /></div>                        
                    </button>
                    <button onClick={() => window.open("https://wa.me/message/XEABYADPSDL2D1")}  className="button button6" >
                      <div  className="img" ><img  alt="" src={whatsapp} /></div>                        
                    </button>
            
                </div>
                  {/* <div className="flex  overflow-visible  w-1 flex-row text-colorid3b2eb70d items-start justify-start space-x-6">
                    <FontAwesomeIcon onClick={() => window.open("www.google.com")} icon={faPhone} className="transition-all cursor-pointer bg-text rounded-lg p-2 h-4 hover:bg-primary" />
                    <FontAwesomeIcon onClick={() => window.open("www.google.com")} icon={faPaperPlane} className="transition-all cursor-pointer bg-text rounded-lg p-2 h-4 hover:bg-primary" />
                    <FontAwesomeIcon onClick={() => window.open("www.google.com")} icon={faEnvelope} className="transition-all cursor-pointer bg-text rounded-lg p-2 h-4 hover:bg-primary" />
                  </div> */}
                </div>
              </div>

            </div>
          </div>
          <div ref={btcRef} className="w-full flex  justify-end h-0 z-0">
            <img
              src={bitcoin}
              style={{
                height: 130,
              }}
              className="animate-bitcoin-intro p-4 md:p-0"
              alt=""
            />
          </div>
          <div ref={whaleRef} className="w-full flex justify-end h-0 z-10">
            <img
              src={whale}
              style={{
                height: 356,
              }}
              alt=""
              className="animate-whale-intro p-7 md:p-0"
            />
          </div>
          <div className="w-full flex p-7 md:p-0 justify-end md:justify-center h-0 z-20" ref={fishRef}>
            <img
              src={fish}
              style={{
                height: 80,
              }}

              alt=""
              className="animate-fish-intro"
            />
          </div>
          <div ref={waveRef} className="w-full flex justify-end h-0 z-10">
            <img
              src={wave}
              style={{
                height: 130,
              }}
              className="animate-wave-intro"

              alt=""
            />
          </div>

        </div>
      </div>
      {/* <div className="grid grid-cols-3 gap-4 w-[80%] bg-[#000]">
    <div>01</div>
    <div>01</div>
    <div>01</div>
  
  <div>09</div>
  <div>09</div>
     <div>09</div>
    </div> */}

<br />





{/* Service we offer */}
<div className="container mx-auto py-8 bg-[#ffffff]">


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1  gap-12">
  {/* Box 1 */}
 
  <div className=" drop-shadow-lg bg-blue-200 rounded-lg  p-4 bg-[#B1B2FF]   " >
      <div className=" flex">


    <iframe className="rounded"         frameBorder='0'
         width="1280" height="720" title="vimeo-player" src="https://player.vimeo.com/video/848486988?h=9a9f238f24?rel=0&autoplay=1&mute=1" allow="autoplay; encrypted-media"     ></iframe>

    </div> 
  </div>




  </div>




    </div>


    <h1 className=" text-4xl text-center font-sans font-bold ">What Our Clients Say</h1>
      <section>
        <Carousel details={carouselDetails} />
      </section>


{/* Use Cases */}
    <div className="container mx-auto py-8 bg-[#ffffff]">
    <h1 className=" text-4xl text-center font-sans font-bold ">Use Cases</h1>
    <br />

      {/* <h1 className="text-3xl font-bold mb-4">Responsive Box Design</h1> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {/* Box 1 */}
       
        <button className="hover:bg-[#ffff]  hover:scale-110  duration-500 drop-shadow-lg bg-blue-200 rounded-lg  p-4 bg-[#ECF2FF] " >
        <img className="hover:animate-pulse transform transition-all " src={CASE1} />
          <h2 className="text-xl text-left ml-2 mt-2 underline font-semibold mb-2">MindBox</h2>
          <p className="text-left  ml-2">Redesigning an automated marketing platform by using flutter.</p>
        </button>

        {/* Box 2 */}
        <button className="hover:bg-[#ffff]  hover:scale-110  duration-500 drop-shadow-lg bg-green-200 rounded-lg p-4 bg-[#ECF2FF]">
        <img className="hover:animate-pulse transform transition-all " src={CASE2} />
          <h2 className="mt-2 ml-2 text-xl underline text-left font-semibold mb-2">Binance Fast Bot</h2>
          <p className=" ml-2 text-left">Develop clinet strategy idea on Tradingview and automate those signals on Binance exchange.</p>
        </button>

        {/* Box 3 */}
        <div className="hover:bg-[#ffff]  hover:scale-110  duration-500 drop-shadow-lg bg-yellow-200 rounded-lg p-4 bg-[#ECF2FF]">
        <img className="hover:animate-pulse transform transition-all " src={CASE3} />
          <h2 className="mt-2 ml-2 text-xl text-left underline font-semibold mb-2">MegaMarket</h2>
          <p className="ml-2 text-left">Developing one of the largest e-Commerce platforms for consumer.</p>
        </div>

        {/* Box 4 */}
        <div className="hover:bg-[#ffff]  hover:scale-110  duration-500 drop-shadow-lg bg-yellow-200 rounded-lg p-4 bg-[#ECF2FF]">
        <img className="hover:animate-pulse transform transition-all " src={CASE4} />
          <h2 className="mt-2 ml-2 text-xl text-left underline font-semibold mb-2">MTF Trading Strategy</h2>
          <p className="ml-2 text-left">Multi time frame trading strategy development based on clinet strategy idea.</p>
        </div>
        {/* Box 5 */}
        <button className="hover:bg-[#ffff]  hover:scale-110  duration-500 drop-shadow-lg bg-blue-200 rounded-lg  p-4 bg-[#ECF2FF] " >
        <img className="hover:animate-pulse transform transition-all " src={CASE5} />
          <h2 className="mt-2 ml-2 text-xl text-left underline font-semibold mb-2">Volume Bot</h2>
          <p className="ml-2 text-left">Develop volume bot to increase token volume by using market making account for token owner.</p>
        </button>

        {/* Box 6 */}
        <button className="hover:bg-[#ffff]  hover:scale-110  duration-500 drop-shadow-lg bg-green-200 rounded-lg p-4 bg-[#ECF2FF]">
        <img className="hover:animate-pulse transform transition-all " src={CASE6} />
          <h2 className="mt-2 ml-2 text-xl underline text-left font-semibold mb-2">Flashloan Bot</h2>
          <p className="ml-2 text-left">Flashloan Bot Development for Uniswap and SushiSwap by using loan funds.</p>
        </button>
{/* 

        <div className="hover:bg-[#ffff]  hover:scale-110  duration-500 drop-shadow-lg bg-yellow-200 rounded-lg p-4 bg-[#ECF2FF]">
        <img className="rounded-lg" src="https://evrone.com/sites/default/files/styles/card_w1056/public/n-fields/cases/sbermegamarket_en.png?itok=DArPk73S"></img>
          <h2 className="text-xl text-left underline font-semibold mb-2">Money Management System</h2>
          <p className="text-left">Money Management System for Binance exchange trading automation.</p>
        </div>


        <div className="hover:bg-[#ffff]  hover:scale-110  duration-500 drop-shadow-lg bg-yellow-200 rounded-lg p-4 bg-[#ECF2FF]">
        <img className="rounded-lg" src="https://evrone.com/sites/default/files/styles/card_w1056/public/n-fields/cases/sbermegamarket_en.png?itok=DArPk73S"></img>
          <h2 className="text-xl text-left underline font-semibold mb-2">Lifetime</h2>
          <p className="text-left">Lifetime an online platform for ordering at-home medical tests</p>
        </div>

        <div className="hover:bg-[#ffff]  hover:scale-110  duration-500 drop-shadow-lg bg-yellow-200 rounded-lg p-4 bg-[#ECF2FF]">
        <img className="rounded-lg" src="https://evrone.com/sites/default/files/styles/card_w1056/public/n-fields/cases/sbermegamarket_en.png?itok=DArPk73S"></img>
          <h2 className="text-xl text-left underline font-semibold mb-2">Lifetime</h2>
          <p className="text-left">Lifetime an online platform for ordering at-home medical tests</p>
        </div> */}
      </div>
    </div>


{/* Service we offer */}
<div className="container mx-auto py-8 bg-[#ffffff]">
    <br />
    <h1 className=" text-4xl text-center font-sans font-bold ">Service We Offer</h1>
    <br />

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-12">
  {/* Box 1 */}
 
  <button className="hover:bg-[#ffff]  hover:scale-110  duration-500 drop-shadow-lg bg-blue-200 rounded-lg  p-4 bg-[#B1B2FF]   " >
    <div className="inline-block">
    <div className=" flex "> 
    {/* <svg className  ="w-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>web</title><path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg> */}
    </div>
    <img className="hover:animate-pulse transform transition-all " src={webDevelopment} />
    <div className="  ">
        <h2 className="text-4xl font-bold mb-3 mt-3 ">Web</h2>
        <h2 className=" text-4xl font-bold mb-3 mt-3 ">Development</h2>
    </div>
    
    </div>  
  </button>

  {/* Box 2 */}
  <button className=" hover:bg-[#ffff]  hover:scale-110  duration-500 drop-shadow-lg bg-green-200 rounded-lg p-4 bg-[#B1B2FF] ">
  <img className="hover:animate-pulse transform transition-all " src={mobileDevelopment}  />
    <h2 className="text-4xl font-bold mb-3 mt-3 ">Mobile App Development</h2>
    <p className="text-left">Localizing a marketplace with complex language requirements</p>
  </button>

    {/* Box 3 */}
    <button className=" hover:bg-[#ffff]  hover:scale-110  duration-500 drop-shadow-lg bg-green-200 rounded-lg p-4 bg-[#B1B2FF]">
    <img className="hover:animate-pulse transform transition-all " src={blockchainDevelopment} alt="" />
    <h2 className="text-4xl font-bold mb-3 mt-3 ">Blockchain Development</h2>
    <p className="text-left">Localizing a marketplace with complex language requirements</p>
  </button>


  </div>




    </div>


{/* Process we follow */}
<div className="container mx-auto py-8 bg-[#ffffff]">
    <br />
    <h1 className=" text-4xl text-center font-sans font-bold ">Process We Follow</h1>
    <br />

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-12">
  {/* Box 1 */}
 
  <button className="hover:bg-[#ffff]  hover:scale-110  duration-500 drop-shadow-lg bg-blue-200 rounded-lg  p-4 bg-[#FAF3F0]   " >
    <div className="inline-block">
    <div className=" flex "> 
    {/* <svg className  ="w-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>web</title><path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg> */}
    </div>
    <img className="hover:animate-pulse transform transition-all " src={webDevelopment} />
    <div className="  ">
        <h2 className="text-1xl text-center font-bold mb-3 mt-3 ">1. Requirement Gathering</h2>
        <h2 className="text-1xl text-center mb-3 mt-3 ">We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.</h2>
        
    </div>
    
    </div>  
  </button>

  {/* Box 2 */}
  <button className=" hover:bg-[#ffff]  hover:scale-110  duration-500 drop-shadow-lg bg-green-200 rounded-lg p-4 bg-[#FAF3F0] ">
  <img className="hover:animate-pulse transform transition-all " src={mobileDevelopment}  />
    <h2 className="text-1xl text-center font-bold mb-3 mt-3 ">2. UI/UX Design</h2>
    <p className="text-center">We create catchy and charming designs with the latest tools of designing to make it a best user-friendly experience.</p>
  </button>

    {/* Box 3 */}
    <button className=" hover:bg-[#ffff]  hover:scale-110  duration-500 drop-shadow-lg bg-green-200 rounded-lg p-4 bg-[#FAF3F0]">
    <img className="hover:animate-pulse transform transition-all " src={blockchainDevelopment} alt="" />
    <h2 className="text-1xl text-center font-bold mb-3 mt-3 ">3. Prototype</h2>
    <p className="text-center">After designing, you will get your prototype, which will be sent ahead for the development process for the product.</p>
  </button>

  
    {/* Box 4 */}
    <button className=" hover:bg-[#ffff]  hover:scale-110  duration-500 drop-shadow-lg bg-green-200 rounded-lg p-4 bg-[#FAF3F0]">
    <img className="hover:animate-pulse transform transition-all " src={blockchainDevelopment} alt="" />
    <h2 className="text-1xl text-center font-bold mb-3 mt-3 ">4. Development</h2>
    <p className="text-center">Development of mobile application/web/blockchain started using latest tools and technologies with transparency.</p>
  </button>

  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-7  gap-12 m-auto justify-items-end">
  
  {/* Box 5 */}
  <button className="hover:bg-[#ffff]  hover:scale-110  duration-500 drop-shadow-lg bg-blue-200 rounded-lg  p-4 bg-[#FAF3F0]   " >
    <div className="inline-block">
    <div className=" flex "> 
    {/* <svg className  ="w-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>web</title><path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg> */}
    </div>
    <img className="hover:animate-pulse transform transition-all " src={webDevelopment} />
    <div className="  ">
        <h2 className="text-1xl text-center font-bold mb-3 mt-3 ">5. Quality Assurance</h2>
        <h2 className="text-1xl text-center mb-3 mt-3 ">Hyperlink values quality and provides 100% bug free application with no compromisation in it.</h2>
    </div>
    </div>  
  </button>

  {/* Box 6 */}
  <button className="hover:bg-[#ffff]  hover:scale-110  duration-500 drop-shadow-lg bg-blue-200 rounded-lg  p-4 bg-[#FAF3F0]   " >
    <div className="inline-block">
    <div className=" flex "> 
    {/* <svg className  ="w-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>web</title><path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg> */}
    </div>
    <img className="hover:animate-pulse transform transition-all " src={webDevelopment} />
    <div className="  ">
        <h2 className="text-1xl text-center font-bold mb-3 mt-3 ">6. Deployment</h2>
        <h2 className="text-1xl text-center mb-3 mt-3 ">After trial and following all processes, your app is ready to launch on the App store or Play Store.</h2>
    </div>
    </div>  
    
  </button>
  

    {/* Box 7 */}
    <button className="hover:bg-[#ffff]  hover:scale-110  duration-500 drop-shadow-lg bg-blue-200 rounded-lg  p-4 bg-[#FAF3F0]   " >
    <div className="inline-block">
    <div className=" flex "> 
    {/* <svg className  ="w-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>web</title><path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg> */}
    </div>
    <img className="hover:animate-pulse transform transition-all " src={webDevelopment} />
    <div className="  ">
        <h2 className="text-1xl text-center font-bold mb-3 mt-3 ">7. Support & Maintenance</h2>
        <h2 className="text-1xl text-center mb-3 mt-3 ">Our company offers you all support and the team is always ready to answer every query after deployment.</h2>
    </div>
    </div>  
  </button>

    </div>



    </div>



    </div>
  );
}
