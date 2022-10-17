import React from 'react'
import {useParams} from "react-router-dom"
import {client, urlFor} from "../client"
import {useState, useEffect, useRef} from "react"
import {BsArrowRightCircle} from "react-icons/bs"
import {BsArrowLeftCircle} from "react-icons/bs"
import {FaTimes} from "react-icons/fa"
import { productQuery } from '../utils/data'
import './ProductPage.scss'
import "../App.css"
import ProductModal from '../components/Product/ProductModal'
 
const ProductPage = () => {
  const [productData, setProductData] = useState(null)
  const [currentImageIndex, setCurrentImageIndex ] = useState(0)
  const [productInfo, setProductInfo] = useState(null)
  const [isCurrentOne, setCurrentOne] = useState(false)
  const [isCurrentTwo, setCurrentTwo] = useState(false)
  const [isCurrentThree, setCurrentThree] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [price, setPrice] = useState(null)
  const [currentInfo, setCurrentInfo] = useState('Informatii Generale')
  const [transition, setTransition] = useState(false)

  const activePrice = isCurrentOne || isCurrentTwo || isCurrentThree

  const {productId} = useParams()
  const imageRef = useRef()
  
  useEffect(() => {
    const query = productQuery(productId)

    client.fetch(query)
    .then(data => {
      setProductData(data[0]) 
      setProductInfo(data[0].productInfo)
    })
    .catch(err => console.log(err))
  }, [productId])
  
  function showPrev() {
    setTransition(true)
    setTimeout(() => {
      setCurrentImageIndex(prev => {
        if(prev === 0) {
          return prev
        } else { 
          return prev-1
        }
      })
      setTransition(false)
    }, 300)
  }

  function showNext() {
    setTransition(true)
    setTimeout(() => {
      setCurrentImageIndex(prev => {
        if(prev === productData.images.length-1) {
          return prev
        } else { 
          return prev+1 
        }
      })
      setTransition(false)
    }, 300)
  }

function setProductPrice(index) {
setPrice(productData.stofe[index].price)
}

function changeImage(image) {
  setTransition(true)

    setTimeout(() => {
      setCurrentImageIndex(productData.images.indexOf(image)) 
      setTransition(false)
    }, 300)
}
  
return (
    <>
      {productData !== null && (
        <div className="container">
          <div className="product">
      <div className="product-img-container">
            <div className="product-img">
    <button className="prev-btn" onClick={showPrev}><BsArrowLeftCircle size={30}/></button>
    <button className="next-btn" onClick={showNext}><BsArrowRightCircle size={30}/></button>
      {productData.images?.length > 0 &&
       <img ref={imageRef} 
       className={`product-image ${transition ? 'transition' : ''}`} 
       src={urlFor(productData.images[currentImageIndex].asset._ref).url()}
       onClick={() => setIsOpen(true)}
       />
      }
    
      <ProductModal open={isOpen}>
        <div className="modal">
        <img src={urlFor(productData.images[currentImageIndex].asset._ref).url()} className="modal-img"/>
        <button onClick={() => setIsOpen(false)} className="times-btn"><FaTimes/></button>
        </div>
        </ProductModal>
       </div>

       <div 
       style={{ 
        gridTemplateColumns: `repeat(${productData.images.length}, 1fr)`
       }}
       className="product-img-preview-container">
        {productData.images.map(image => {
          return <img onClick={() => changeImage(image)}
          key={image.asset._ref} 
          className="product-img-preview" 
          src={urlFor(image.asset._ref).url()}/>
        })}
      </div>
      </div>

            <div className="product-data">
              <h1>{productData.name}</h1>
            
              <div className="product-desc">
                <div>
              {productData.description?.length > 0 &&
              productData.description.map((item, i) => <p key={i}>{item}</p>)
              }
              </div>
              
              <div className="fabric-types">
              <p>Alege tipul de stofă pentru a vedea pretul</p>
              <div>

                {productData.stofe?.length === 1 &&
                <button className={`fabric-type ${isCurrentOne ? 'active' : ''}`} onClick={() => {
                  isCurrentOne(prev => !prev) 
                  setCurrentTwo(false)
                  setCurrentThree(false)
                  setProductPrice(0)
                  }}>{productData.stofe[0].name}</button>}

                {productData.stofe?.length === 2 &&
                <>
                <button className={`fabric-type ${isCurrentOne ? 'active' : ''}`} onClick={() => {
                  setCurrentOne(prev => !prev) 
                  setCurrentTwo(false)
                  setCurrentThree(false)
                  setProductPrice(0)
                  }}>{productData.stofe[0].name}</button>
                
                <button className={`fabric-type ${isCurrentTwo ? 'active' : ''}`} onClick={() => {
                  setCurrentTwo(prev => !prev) 
                  setCurrentOne(false)
                  setCurrentThree(false)
                  setProductPrice(1)
                  }}>{productData.stofe[1].name}</button>
                </>}

                {productData.stofe?.length === 3 &&
                <>
                <button className={`fabric-type ${isCurrentOne ? 'active' : ''}`} onClick={() => {
                  setCurrentOne(prev => !prev) 
                  setCurrentTwo(false)
                  setCurrentThree(false)
                  setProductPrice(0)
                  }}>{productData.stofe[0].name}</button>
                
                <button className={`fabric-type ${isCurrentTwo ? 'active' : ''}`} onClick={() => {
                  setCurrentTwo(prev => !prev) 
                  setCurrentOne(false)
                  setCurrentThree(false)
                  setProductPrice(1)
                  }}>{productData.stofe[1].name}</button>

<button className={`fabric-type ${isCurrentThree ? 'active' : ''}`} onClick={() => {
                  setCurrentThree(prev => !prev) 
                  setCurrentOne(false)
                  setCurrentTwo(false)
                  setProductPrice(2)
                  }}>{productData.stofe[2].name}</button>
                </>}

                </div>
                <p className={`price ${activePrice ? 'active-price' : ''}`}>
                  {isCurrentOne && `${price.toFixed(2)} Lei`}
                  {isCurrentTwo && `${price.toFixed(2)} Lei`}
                  {isCurrentThree && `${price.toFixed(2)} Lei`}
                  </p>
              </div>
            
            
              {productInfo?.length > 0 &&
              <div className="product-info">
                <div className="product-info-btns">
              <button onClick={() => setCurrentInfo('Informatii Generale')}
               className={`product-info-category 
               ${currentInfo === 'Informatii Generale' ? 'active-category' : ''}` }>
                Informatii Generale
              </button>
              <button onClick={() => setCurrentInfo('Structura')} 
              className={`product-info-category 
              ${currentInfo === 'Structura' ? 'active-category' : ''}` }>
              Structură
            </button>
            </div>

            {currentInfo === 'Informatii Generale' &&
            <div className="info-category informatii-generale">
              {productInfo && 
              <>
              <div>
              <h2>Dimensiuni</h2>
              <div className="dimensiuni">
              {productInfo[0].dimensiuni?.map(item => {
                return <p key={item}>{item}</p>
              })}
              </div>
              <p>*cotele de gabarit ale produsului finit pot sa difere cu +/- 3 cm</p>
              {productInfo[0].schema &&
              <img className="schema" src={urlFor(productInfo[0].schema.asset._ref).url()}/>}
              </div>
              </>
              }
            </div>
            }

            {currentInfo === 'Structura' &&
            <div className="structure-category structura">
              {productInfo && 
              <div>
              {productInfo[0].structura && 
              (
              <div>
              <h2>Structura</h2>
              <div className="dimensiuni">
              {productInfo[0].structura?.map(item => {
                return <p key={item}>{item}</p>
              })}
              </div>
              </div>)}

              {productInfo[0].compozitie_sezut_spatar && 
              (
              <div>
              <h2>Compozitie sezut/spatar</h2>
              <div className="compozitie">
              {productInfo[0].compozitie_sezut_spatar?.map(item => {
                return <p key={item}>{item}</p>
              })}
              </div>
              </div>)}

              {productInfo[0].material_de_acoperire && 
              (
              <div>
              <h2>Material de acoperire</h2>
              <div className="material">
              {productInfo[0].material_de_acoperire?.map(item => {
                return <p key={item}>{item}</p>
              })}
              {productInfo[0].perne_spatar?.map(item => {
                return <p key={item}>{item}</p>
              })}
              </div>
              </div>)}

              
              </div>
              }
            </div>
            }




            
            </div>
                } 
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductPage