import React from 'react'
import AboutImage from "../assets/images/euromobila_about.jpg"
import './About.scss'
import { setDocumentTitle } from '../utils/setDocumentTitle'

const About = () => {
  setDocumentTitle('Euromobila | Despre Noi')
  return (
    <div className="about container">
       <h1>Despre Noi.</h1>
       <p>
       Suntem o companie producatoare de mobila tapitata, fondata în 2001. Compania a acumulat in aceasta perioada o experienta considerabila în sfera productiei si a satisfacerii nevoilor clientilor.
       </p>
       <p>
       Prin produsele noastre oferim posibilitatea clientilor sa aleaga dintr-o gama larga, de la clasic la modern, combinând la alegere materialele pentru a oferi un confort si o eleganta deosebita fiecarei case. Oferim canapele, canapele extensibile, fotolii, canapele de colt. Din experienta si activitatea noastra ne-am câstigat abilitatea sa creem permanent produse si modele noi, fiind unici prin creatiile noastre.
       </p>
       <img src={AboutImage}/>
    </div>
  )
}

export default About