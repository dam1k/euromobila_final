import React from 'react'
import './NotFound.scss';
import { BsChevronRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { setDocumentTitle } from '../utils/setDocumentTitle';

const NotFound = () => {
  setDocumentTitle('Not Found');
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