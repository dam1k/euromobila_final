import React, {useEffect, useState} from 'react'
import "./Contact.scss";
import {HiLocationMarker} from "react-icons/hi"
import {MdEmail} from "react-icons/md"
import {BsFillTelephoneInboundFill} from "react-icons/bs"
import { setDocumentTitle } from '../utils/setDocumentTitle';

const initialMapSize = {width: 700, height: 500}

const Contact = () => {
  setDocumentTitle('Euromobila | Contacte')
  const [width, setWidth] = useState(window.innerWidth);
  const [mapSize, setMapSize] = useState(initialMapSize);

  useEffect(() => {
    function resizeWindow() {
        setWidth(window.innerWidth);
    }
    window.addEventListener('resize', resizeWindow)
    return () => window.removeEventListener('resize', resizeWindow);
  }, [window.innerWidth])
  
  useEffect(() => {
    if(width < 1200) {
      setMapSize({
        width:'100%',
        height: 400
      })
    } else {
      setMapSize(initialMapSize);
    }
  }, [width])

  return (
    <div className="contact container">
     <h1 className="pageTitle">
          Contacte
     </h1>
     <div className="gold-detail"></div>
     <div className="contact-flex">
     <div className="contact-info">
        <h3>Contactează-ne</h3>
        <p><HiLocationMarker/> str. Calea Trusenilor 91, CC Creator Mall</p>
        <p>Salon Euromobila</p>
        <p><BsFillTelephoneInboundFill size={15}/> +373 693 18 106</p>
        <p><MdEmail/> euromobila.chisinau@gmail.com</p>
        <h3 className="orar">Orar</h3>
        <p>L-V 10:00 - 19:00</p>
        <p>S-D - 10:00 - 18:00</p>
      </div>
      <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10872.610930780658!2d28.7582054!3d47.0568542!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4600ef4d10d8e182!2sCreatorMall!5e0!3m2!1sen!2s!4v1674142166349!5m2!1sen!2s" width={mapSize.width} height={mapSize.height} style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
     </div>
     </div>
  )
}

export default Contact