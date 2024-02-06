import React from 'react'
import About from "./About";
import Header from "./Header";
import Promotionals from '../Comps/Promotionals/Promotionals';
const Home = () => {
  return (
    <>
        <Header isMenu={true} />
        <Promotionals />
        <About />
    </>
  )
}

export default Home