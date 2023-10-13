"use client"
import React from "react";

import HomeMainComponent from "./HomeMainComponent";

export enum PAGES {
  root = "main",
  chart = "trading-from-chart",
  features = "features",
  comparison = "comparison",
}

export default function Home() {
  return (
    <div className="w-full">
      <section id={PAGES.root} className="h-fit">
        <HomeMainComponent />
      </section>
    </div>
  );
}
