import React from 'react'
import {Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Home } from '../pages/Home'
import { Project } from '../pages/Project'
import Experience from '../pages/Experience';
import DetailProject from '../pages/DetailProject'

const PathMotion = () => {
    const location = useLocation();
    return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />
            <Route path='/project' element={<Project />} />
            <Route path='/project/:id' element={<DetailProject />} />
            <Route path='/experience' element={<Experience />} />
        </Routes>            
    </AnimatePresence>
    )
}

export default PathMotion