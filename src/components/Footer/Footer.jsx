import React from 'react'
import logo from "../../assets/images/euromobila-logo.png"
import {BsFillDiamondFill} from "react-icons/bs"
import {HiLocationMarker} from "react-icons/hi"
import {MdEmail} from "react-icons/md"
import {BsFillTelephoneInboundFill} from "react-icons/bs"
import {Link} from "react-router-dom"
import "./Footer.scss"

const Footer = () => {
  return (
    <div className="footer-wrapper">
    <div className="main-footer container">
      <div className="footer-logo">
      <div>
        <img src={logo} alt="logo"/>
      </div>
      <div>
      <p>Din pasiunea pentru canapele,</p>
      <p>culoare și confort.</p>
      </div>
      </div>

      <div className="contact-info">
        <h3>Contactează-ne</h3>
        <p><HiLocationMarker/> str. Calea Iesilor 91</p>
        <p><MdEmail/> euromobila@gmail.com</p>
        <p><BsFillTelephoneInboundFill size={15}/> +373 0693 18 106</p>
      </div>

      <div className="footer-info">
        <h3>Informații</h3>
        <ul>
          <li><Link to="./despre-noi"><BsFillDiamondFill size={12}/> Despre Noi</Link></li>
          <li><Link to="./livrare"><BsFillDiamondFill size={12}/> Livrare</Link></li>
          <li><Link to="./returnare"><BsFillDiamondFill size={12}/> Returnare</Link></li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Footer