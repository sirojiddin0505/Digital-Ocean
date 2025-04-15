import { useState } from 'react'
import './App.css'
import Nav from './components/nav/nav'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import Main from './components/main/main'
import Section from './components/section/section'
import Sign from './components/sign/sign'
import Footer from './components/footer/footer'

function App() {
  return (
    <>
    <Nav/>
    <Header/>
    <Hero/>
    <Main/>
    <Section/>
    <Sign/>
    <Footer/>
    </>
  )
}

export default App