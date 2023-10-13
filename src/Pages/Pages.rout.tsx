import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";

export default function Pages() {
  return (
    <div className="bg-slate-600 flex justify-center  w-full">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
