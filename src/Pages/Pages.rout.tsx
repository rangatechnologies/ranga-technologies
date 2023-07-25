import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Docs from './Docs/Docs'
import Home from './Home/Home'

export default function Pages() {
    return (
        <div className='bg-slate-600 flex justify-center  w-full'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="docs" element={<Docs />} />
            </Routes>
        </div>
    )
}
