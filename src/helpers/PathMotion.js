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
            <Route path='/personalweb/' element={<Home />} />
            <Route path='/personalweb/project' element={<Project />} />
            <Route path='/personalweb/project/:id' element={<DetailProject />} />
            <Route path='/personalweb/experience' element={<Experience />} />
        </Routes>            
    </AnimatePresence>
    )
}

export default PathMotion