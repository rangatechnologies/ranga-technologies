import React from 'react'
import { useLocation } from 'react-router-dom';

import HomeMainComponent from './HomeMainComponent';

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
    </div>
  )
}
