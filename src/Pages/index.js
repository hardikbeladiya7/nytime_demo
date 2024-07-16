import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'

const Index = () => {
    return (
        <Routes>
            <Route path="/" Component={Home}></Route>
        </Routes>
    )
}

export default Index
