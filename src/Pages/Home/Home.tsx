import React from 'react'
import { useLocation } from 'react-router-dom';
import Features from './Features';
import HomeMainComponent from './HomeMainComponent';
import Usage from './Usage';

export enum PAGES {
  root = "main",
  chart = "trading-from-chart",
  features = "features",
  comparison = "comparison"
}


export default function Home() {
  const location = useLocation();

  React.useLayoutEffect(() => {
    if (location.hash !== '') {
      document.getElementById(location.hash.replace("#", ''))?.scrollIntoView();
    } else {
      document.getElementById(PAGES.root)?.scrollIntoView();
    }
  }, [location]);

  return (
    <div className='w-full'>
      <section id={PAGES.root} className="h-fit">
        <HomeMainComponent />
      </section>
      {/* <section className='w-full  flex flex-col justify-center' id={PAGES.chart} >
        <Usage />
      </section>
      <section className='w-full  flex flex-col justify-center' id={PAGES.features}>
        <Features />
      </section> */}
      {/* <section className='h-fit' id={PAGES.comparison}>
        <Comparison />
      </section> */}
    </div>
  )
}
