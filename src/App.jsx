import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Projects from './pages/Projects';


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />}/>
              <Route path='/products' element={<Products />}/>
              <Route path='/projects' element={<Projects />}/>
          </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App