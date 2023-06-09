import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginPage from './compnents/LoginPage'
import ProductsPage from './compnents/ProductsPage'
import ResistrationPage from './compnents/ResistrationPage'
import Navigation from './compnents/Navigation'
import NotFound from './compnents/NotFound'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<ResistrationPage/>}/>
        <Route path="/loginpage" element={<LoginPage/>}/>
        <Route path="/productspage" element={<ProductsPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
