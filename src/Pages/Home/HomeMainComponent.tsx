import React, { useLayoutEffect, useRef } from "react";
import whale from "../../Imgs/SVGComponets/whale.svg";
import fish from "../../Imgs/SVGComponets/fish.svg";
import wave from "../../Imgs/SVGComponets/wave.svg";
import captain from "../../Imgs/SVGComponets/captain.svg";
import bitcoin from "../../Imgs/SVGComponets/bitcoin.svg";

import carouselDetails from './carousel.json'


import gmail from "../../Imgs/SVGComponets/gmail.svg";
import telegram from "../../Imgs/SVGComponets/telegram.svg";
import facebook from "../../Imgs/SVGComponets/facebook.svg";
import whatsapp from "../../Imgs/SVGComponets/whatsapp.svg";
// import fiverr from "../../Imgs/SVGComponets/insta.svg";
import insta from "../../Imgs/SVGComponets/insta.svg";
// import upwork from "../../Imgs/SVGComponets/upwork.svg";
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
import cantact_us from '../../Imgs/contact_us.png'




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
            {/* Web @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
            <div className=" hidden md:flex   z-50">
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
                    <button onClick={() => window.open("ranganaupul@gmail.com")}  className="button button4" >
                      <div >
                      <svg className="hover:animate-bounce hover:h-10 hover:w-10 hover:duration-300 transform w-7 h-7 fill-primary hover:fill-[#ea4335]"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24">
  <path
    d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
    fill-rule="evenodd"
    clip-rule="evenodd" />
</svg>
                        </div>                        
                    </button>
                    <button onClick={() => window.open("https://t.me/rangaubot")}  className=" button button2" >
                      <div >
                      <svg className=" hover:animate-bounce hover:h-10 hover:w-10 hover:duration-300 transform h-7 w-7 fill-primary hover:fill-[#0088cc]"
  fill="currentColor"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"

  >
  <path
    id="telegram-1"
    d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z" />
</svg>
                        
                        </div>                        
                    </button>
                    <button onClick={() => window.open("https://web.facebook.com/ubot.trading.9/")}  className="button button3" >
                      <div  >
                      <svg className="hover:animate-bounce hover:h-10 hover:w-10 hover:duration-300 transform w-7 h-7 fill-primary hover:fill-[#1877f2]"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 24 24">
  <path
    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
</svg>
                        
                        </div>                        
                    </button>
                    <button onClick={() => window.open("https://instagram.com/rangatechnologies?igshid=NGExMmI2YTkyZg==")}  className="button button4" >
                      <div  >
                      <svg className="hover:animate-bounce hover:h-10 hover:w-10 hover:duration-300 transform w-7 h-7 fill-primary hover:fill-[#c13584]"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 24 24">
  <path
    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
</svg>
                        
                        </div>                        
                    </button>

                    <button onClick={() => window.open("https://wa.me/message/XEABYADPSDL2D1")}  className="button button6" >
                      <div  >
                      <svg className="hover:animate-bounce hover:h-10 hover:w-10 hover:duration-300 transform h-7 w-7 fill-primary hover:fill-[#128c7e]"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24">
  <path
    d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
</svg>

                        </div>                        
                    </button>

                    {/* <button onClick={() => window.open("https://www.upwork.com/services/product/automated-trading-bot-for-tradingview-and-binance-exchange-1521022452186038272?ref=project_share")}  className="button button5" >
                      <div  className="img" ><img  alt="" src={upwork} /></div>                        
                    </button> */}
  
                    {/* <FontAwesomeIcon onClick={() => window.open("www.google.com")} icon={faPaperPlane} className="transition-all cursor-pointer bg-text rounded-lg p-4 h-7 hover:bg-primary" />
                    <FontAwesomeIcon onClick={() => window.open("www.google.com")} icon={faEnvelope} className="transition-all cursor-pointer bg-text rounded-lg p-4 h-7 hover:bg-primary" /> */}
                  </div>
                </div>
              </div>
            </div> 

            {/* Mobile @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
            <div className=" md:hidden flex z-50">
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
                  className="bg-primary flex mt-8 h-24 w-24 items-center p-1 rounded-full"
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
                    <button onClick={() => window.open("ranganaupul@gmail.com")}  className="button button4" >
                      <div >
                      <svg className="hover:animate-bounce hover:h-10 hover:w-10 hover:duration-300 transform w-7 h-7 fill-primary hover:fill-[#ea4335]"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24">
  <path
    d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
    fill-rule="evenodd"
    clip-rule="evenodd" />
</svg>
                        </div>                        
                    </button>
                    <button onClick={() => window.open("https://t.me/rangaubot")}  className=" button button2" >
                      <div >
                      <svg className=" hover:animate-bounce hover:h-10 hover:w-10 hover:duration-300 transform h-7 w-7 fill-primary hover:fill-[#0088cc]"
  fill="currentColor"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"

  >
  <path
    id="telegram-1"
    d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z" />
</svg>
                        
                        </div>                        
                    </button>
                    <button onClick={() => window.open("https://web.facebook.com/ubot.trading.9/")}  className="button button3" >
                      <div  >
                      <svg className="hover:animate-bounce hover:h-10 hover:w-10 hover:duration-300 transform w-7 h-7 fill-primary hover:fill-[#1877f2]"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 24 24">
  <path
    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
</svg>
                        
                        </div>                        
                    </button>
                    <button onClick={() => window.open("https://instagram.com/rangatechnologies?igshid=NGExMmI2YTkyZg==")}  className="button button4" >
                      <div  >
                      <svg className="hover:animate-bounce hover:h-10 hover:w-10 hover:duration-300 transform w-7 h-7 fill-primary hover:fill-[#c13584]"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 24 24">
  <path
    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
</svg>
                        
                        </div>                        
                    </button>

                    <button onClick={() => window.open("https://wa.me/message/XEABYADPSDL2D1")}  className="button button6" >
                      <div  >
                      <svg className="hover:animate-bounce hover:h-10 hover:w-10 hover:duration-300 transform h-7 w-7 fill-primary hover:fill-[#128c7e]"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24">
  <path
    d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
</svg>

                        </div>                        
                    </button>
                    {/* <button onClick={() => window.open("https://www.upwork.com/services/product/automated-trading-bot-for-tradingview-and-binance-exchange-1521022452186038272?ref=project_share")}  className="button button5" >
                      <div  className="img" ><img  alt="" src={upwork} /></div>                        
                    </button> */}
            
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





{/* video we offer */}
<div className="container mx-auto py-8 bg-[#ffffff]">


<div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-2xl lg:gap-12">
  {/* Box 1 */}
 
  <div className="drop-shadow-lg max-w-screen-sm md:max-w-screen-md lg:max-w-screen-2xl rounded lg:p-4 bg-[#B1B2FF]   " >

      <iframe   className="  w-full  flex  rounded"         frameBorder='0'
         width="1280"  height="720" title="vimeo-player" src="https://player.vimeo.com/video/848486988?h=9a9f238f24?rel=0&autoplay=1&mute=1" allow="autoplay; encrypted-media"     ></iframe>


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
       
        <button className="hover:bg-[#B1B2FF]  hover:scale-110  duration-500 drop-shadow-lg bg-blue-200 rounded-lg  p-4 bg-[#ECF2FF] " >
        <img className="hover:animate-pulse transform transition-all " src={CASE1} />
          <h2 className="text-xl text-center ml-2 mt-2 underline font-semibold mb-2">MindBox</h2>
          <p className="text-center  ml-2">Redesigning an automated marketing platform by using flutter.</p>
        </button>

        {/* Box 2 */}
        <button className="hover:bg-[#B1B2FF]  hover:scale-110  duration-500 drop-shadow-lg bg-green-200 rounded-lg p-4 bg-[#ECF2FF]">
        <img className="hover:animate-pulse transform transition-all " src={CASE2} />
          <h2 className="mt-2 ml-2 text-xl underline text-center font-semibold mb-2">Binance Fast Bot</h2>
          <p className=" ml-2 text-center">Develop clinet strategy idea on Tradingview and automate those signals on Binance exchange.</p>
        </button>

        {/* Box 3 */}
        <div className="hover:bg-[#B1B2FF]  hover:scale-110  duration-500 drop-shadow-lg bg-yellow-200 rounded-lg p-4 bg-[#ECF2FF]">
        <img className="hover:animate-pulse transform transition-all " src={CASE3} />
          <h2 className="mt-2 ml-2 text-xl text-center underline font-semibold mb-2">MegaMarket</h2>
          <p className="ml-2 text-center">Developing one of the largest e-Commerce platforms for consumer.</p>
        </div>

        {/* Box 4 */}
        <div className="hover:bg-[#B1B2FF]  hover:scale-110  duration-500 drop-shadow-lg bg-yellow-200 rounded-lg p-4 bg-[#ECF2FF]">
        <img className="hover:animate-pulse transform transition-all " src={CASE4} />
          <h2 className="mt-2 ml-2 text-xl text-center underline font-semibold mb-2">MTF Trading Strategy</h2>
          <p className="ml-2 text-center">Multi time frame trading strategy development based on clinet strategy idea.</p>
        </div>
        {/* Box 5 */}
        <button className="hover:bg-[#B1B2FF]  hover:scale-110  duration-500 drop-shadow-lg bg-blue-200 rounded-lg  p-4 bg-[#ECF2FF] " >
        <img className="hover:animate-pulse transform transition-all " src={CASE5} />
          <h2 className="mt-2 ml-2 text-xl text-center underline font-semibold mb-2">Volume Bot</h2>
          <p className="ml-2 text-center">Develop volume bot to increase token volume by using market making account for token owner.</p>
        </button>

        {/* Box 6 */}
        <button className="hover:bg-[#B1B2FF]  hover:scale-110  duration-500 drop-shadow-lg bg-green-200 rounded-lg p-4 bg-[#ECF2FF]">
        <img className="hover:animate-pulse transform transition-all " src={CASE6} />
          <h2 className="mt-2 ml-2 text-xl underline text-center font-semibold mb-2">Flashloan Bot</h2>
          <p className="ml-2 text-center">Flashloan Bot Development for Uniswap and SushiSwap by using loan funds.</p>
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
 
  <button className="hover:bg-[#B1B2FF]  hover:scale-110  duration-500 drop-shadow-lg bg-blue-200 rounded-lg  p-4 bg-[#ffffff]   " >
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
  <button className=" hover:bg-[#B1B2FF]  hover:scale-110  duration-500 drop-shadow-lg bg-green-200 rounded-lg p-4 bg-[#ffffff] ">
  <img className="hover:animate-pulse transform transition-all " src={mobileDevelopment}  />
    <h2 className="text-4xl font-bold mb-3 mt-3 ">Mobile App Development</h2>
    
  </button>

    {/* Box 3 */}
    <button className=" hover:bg-[#B1B2FF]  hover:scale-110  duration-500 drop-shadow-lg bg-green-200 rounded-lg p-4 bg-[#ffffff]">
    <img className="hover:animate-pulse transform transition-all " src={blockchainDevelopment} alt="" />
    <h2 className="text-4xl font-bold mb-3 mt-3 ">Blockchain Development</h2>
    
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
 
  <button className="hover:bg-[#B1B2FF]  hover:scale-110  duration-500 drop-shadow-lg bg-blue-200 rounded-lg  p-4 bg-[#FAF3F0]   " >
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
  <button className=" hover:bg-[#B1B2FF]  hover:scale-110  duration-500 drop-shadow-lg bg-green-200 rounded-lg p-4 bg-[#FAF3F0] ">
  <img className="hover:animate-pulse transform transition-all " src={mobileDevelopment}  />
    <h2 className="text-1xl text-center font-bold mb-3 mt-3 ">2. UI/UX Design</h2>
    <p className="text-center">We create catchy and charming designs with the latest tools of designing to make it a best user-friendly experience.</p>
  </button>

    {/* Box 3 */}
    <button className=" hover:bg-[#B1B2FF]  hover:scale-110  duration-500 drop-shadow-lg bg-green-200 rounded-lg p-4 bg-[#FAF3F0]">
    <img className="hover:animate-pulse transform transition-all " src={blockchainDevelopment} alt="" />
    <h2 className="text-1xl text-center font-bold mb-3 mt-3 ">3. Prototype</h2>
    <p className="text-center">After designing, you will get your prototype, which will be sent ahead for the development process for the product.</p>
  </button>

  
    {/* Box 4 */}
    <button className=" hover:bg-[#B1B2FF]  hover:scale-110  duration-500 drop-shadow-lg bg-green-200 rounded-lg p-4 bg-[#FAF3F0]">
    <img className="hover:animate-pulse transform transition-all " src={blockchainDevelopment} alt="" />
    <h2 className="text-1xl text-center font-bold mb-3 mt-3 ">4. Development</h2>
    <p className="text-center">Development of mobile application/web/blockchain started using latest tools and technologies with transparency.</p>
  </button>

  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-7  gap-12 m-auto justify-items-end">
  
  {/* Box 5 */}
  <button className="hover:bg-[#B1B2FF]  hover:scale-110  duration-500 drop-shadow-lg bg-blue-200 rounded-lg  p-4 bg-[#FAF3F0]   " >
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
  <button className="hover:bg-[#B1B2FF]  hover:scale-110  duration-500 drop-shadow-lg bg-blue-200 rounded-lg  p-4 bg-[#FAF3F0]   " >
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
    <button className="hover:bg-[#B1B2FF]  hover:scale-110  duration-500 drop-shadow-lg bg-blue-200 rounded-lg  p-4 bg-[#FAF3F0]   " >
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
{/* Start conversetion  */}

<div className=' lg:ml-4 h-60 md:h-75 lg:h-48 bg-[#ECF2FF]'>
  <div className="">
    <br />
    <br />
  </div>
          <h2 className=" text-2xl md:text-4xl lg:text-6xl text-center font-neu mb-2">Start a conversation</h2>
          {/* <h2 className=" text-2xl md:text-4xl lg:text-6xl text-center font-neu mb-2">conversation</h2> */}
          <p className=" text-center">Get in touch with us to discuss new</p>
          <p className=" text-center">product ideas and business</p>
          <p className=" text-center">opportunities.</p>
          
          </div>
          
<div className="grid grid-cols-5 drop-shadow-lg bg-blue-200 rounded-lg  p-4 bg-[#ECF2FF]">
  
  
  <div className="col-span-2 ">
  <img className="hover:animate-pulse transform transition-all " src={cantact_us} />
    </div>
    <div className="col-span-3 " >


          {/* about you */}
          <div className='mt-2  lg:ml-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
         
         <div className='col-span-1 lg:col-span-1'>
            <h2 className="ml-4 text-1xl md:text-2xl lg:text-3xl text-left font-neu mb-2">About you</h2>
         </div>   
    <div className='col-span-1 md:col-span-2 lg:col-span-4'>
      <form className=" bg-gray-100  rounded-md">
      <div className="mb-4">

        
        <input
          placeholder="Name"
          type="text"
          id="firstName"
          name="firstName"
          className="w-3/4 lg:w-1/2 p-2 hover:animate-pulse hover:text-2xl transition-all duration-300 rounded-md focus:outline-none focus:border-indigo-500"
          required
        />
      </div>

      <div className="mb-4">

        <input
          placeholder="Email"
          type="email"
          id="email"
          className="w-3/4 lg:w-1/2 p-2 hover:animate-pulse hover:text-2xl transition-all duration-300 rounded-md focus:outline-none focus:border-indigo-500"
          required
        />
      </div>

      <div className="mb-4">

        <input
          placeholder="Phone Number"
          type="name"
          id="name"
          name="name"
          className="w-3/4 lg:w-1/2 p-2 hover:animate-pulse hover:text-2xl transition-all duration-300 rounded-md focus:outline-none focus:border-indigo-500"
          required
        />
      </div>



      {/* <button type="submit" className="transition-all transform duration-500 bg-[#ACFADF] text-white py-2 px-4 rounded-md hover:bg-[#6f3cc8]">
        Submit
      </button> */}
           </form>
         </div>   
 

         

          </div>

          {/* about your project */}
          <div className='mt-2  lg:ml-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
         
         <div className='col-span-1 lg:col-span-1'>
            <h2 className="ml-4 text-1xl md:text-2xl lg:text-3xl text-left font-neu mb-2">About your project</h2>
         </div>   
         <div className='col-span-1 md:col-span-2 lg:col-span-4'>
      <form className="bg-gray-100  rounded-md">
      <div className="mb-4 w-auto">

      <h2 className='mb-4'>What do you want to achieve?</h2>

      <select className='w-3/4 lg:w-1/2 p-2 hover:animate-pulse hover:text-2xl transition-all duration-300 rounded-md focus:outline-none focus:border-indigo-500' id="country" name="country">
      <option value="australia">Web Development</option>
      <option value="canada">Mobile APP Development</option>
      <option value="usa">Blockchain Development</option>
    </select>
        
      </div>

      {/* <!--Default disabled checkbox--> */}

<h2 className='mt-10' >What services do you need?</h2>

{/* tick boxes */}
<div className=' mt-4 mb-4 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>

{/* tick box */}

<div className="transition-all duration-400 col-span-1 mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
        <label className='' htmlFor="">Web Development</label>
  <input
    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent disabled:opacity-60 dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
    type="checkbox"
    value=""
    id="flexCheckDisabled"
    />
    
</div>

{/* tick box */}
<div className="transition-all duration-400  col-span-1 mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
        <label className='' htmlFor="">Trading Strategy Development</label>
  <input
    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent disabled:opacity-60 dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
    type="checkbox"
    value=""
    id="flexCheckDisabled"
    />
    
</div>
{/* tick box */}
<div className="transition-all duration-400  col-span-1 mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
        <label className='' htmlFor="">Volume Bot Development</label>
  <input
    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent disabled:opacity-60 dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
    type="checkbox"
    value=""
    id="flexCheckDisabled"
    />
    
</div>
{/* tick box */}

<div className="transition-all duration-400 col-span-1 mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
        <label className='' htmlFor="">Flashloan Bot Development</label>
  <input
    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent disabled:opacity-60 dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
    type="checkbox"
    value=""
    id="flexCheckDisabled"
    />
    
</div>

{/* tick box */}
<div className="transition-all duration-400  col-span-1 mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
        <label className='' htmlFor="">MOBILE DEVELOPMENT</label>
  <input
    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent disabled:opacity-60 dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
    type="checkbox"
    value=""
    id="flexCheckDisabled"
    />
    
</div>
{/* tick box */}
<div className="transition-all duration-400  col-span-1 mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
        <label className='' htmlFor="">Blockchain Development</label>
  <input
    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent disabled:opacity-60 dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
    type="checkbox"
    value=""
    id="flexCheckDisabled"
    />
    
</div>

</div>

{/* tell us about your project */}
<h2 className='mb-4' >Tell us about your project</h2>
<div>
<textarea className ="w-3/4 p-2 hover:animate-pulse hover:text-2xl transition-all duration-300 rounded-md" id="subject" name="subject" placeholder="Write something.." ></textarea>


</div>
     

      <button type="submit" className="shadow-2xl lg:w-40 lg:h-15 text-xl  mt-4 transition-all transform duration-500 bg-[#3C79F5] text-white py-2 px-4 rounded-md hover:bg-[#6f3cc8]">
        Submit
      </button>
           </form>
         </div>  


         

          </div>


          
        </div>
        <div>
        <svg className=" w-7 h-7 fill-primary"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  
  viewBox="0 0 24 24">
  <path
    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
</svg>
        </div>
        </div>
    </div>
  );
}
