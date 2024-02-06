import React from 'react'

const Header = ({ isMenu }) => {
  return (
  <>
  {isMenu ? (
    <section id ="top">
        <section id = "hero">
                <div id  = "header">
                    <h1>The <span class = "unique">Unique </span>Bean</h1>
                    <h2>Local Coffee</h2>
                </div>
            <div id = "header_backdrop">
            </div>
            <div id = "header_backdrop_2">
            </div>
        </section>
    </section>
    ) : (
      <>
    <div id  = "menu_head">
                <h2><span class = "unique"  style={{fontSize: "100px"}}>Our</span></h2>
                <h2><span class = "unique" style={{fontSize: "100px", textIndent: "100px"}}>Menu</span></h2>
    </div>
    <div class = "border"><p style = {{opacity: 0}}>1</p></div>
    </>
    )}
  </>
  )
}

export default Header