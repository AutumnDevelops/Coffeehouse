import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaSquarePinterest } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
const Promotionals = () => {
  return (
<>
<div id  = "info_section">
    <section id = "promotionals">
        <div id = "submit_information">
            <h3>Recieve News & Promotions</h3>
            <form>
                    <input id = "name" placeholder ="Your Name" />
                    <input id = "email" placeholder ="Your Email" />
                    <input type = "button" value = "Go!" id = "submit"/>
            </form>
        </div>
        <div id = "contact_information">
            <h3>Contact</h3>
                <ul>
                    <li><FaFacebookSquare /></li>
                    <li><IoLogoLinkedin/></li>
                    <li><FaSquarePinterest/></li>
                    <li><FaInstagramSquare/></li>
                </ul>
        </div>
    </section>
</div>
</>
  )
}

export default Promotionals