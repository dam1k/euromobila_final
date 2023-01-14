import React from 'react'
import './NotFound.scss';
import { BsChevronRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
     <>
    <div className="not-found">
     Pagina nu a fost gasita
     <Link to='/'><button className="brown-btn btn" type="button">Inapoi la pagina principala<BsChevronRight/></button> </Link>
    </div>

    </>
  )
}

export default NotFound