import React from 'react'
import ReactDOM  from 'react-dom'
import './ProductModal.scss'


const ProductModal = ({open, children}) => {
  if(!open) return null


  return ReactDOM.createPortal(
       <> 
        <div className="modal-overlay">
            {children}
        </div>
    </>,
    document.getElementById('portal')
  )
}

export default ProductModal