import React, {useEffect, useState, useRef} from 'react'
import "../../App.css"
import {Swiper, SwiperSlide } from 'swiper/react'
import {Navigation, Pagination} from "swiper"
import { bannerQuery } from '../../utils/data'
import {client} from "../../client"
import HeaderSlide from './HeaderSlide'
import {BsArrowRightCircle} from "react-icons/bs"
import {BsArrowLeftCircle} from "react-icons/bs"
import "./Header.scss"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Header = () => { 
  const [bannerData, setBannerData] = useState(null)
  const swiperRef = useRef(null)
 
  function showNext() {
    swiperRef.current.swiper.slideNext()
  }
  
  function showPrev() {
    swiperRef.current.swiper.slidePrev()
  }

  useEffect(() => { 
    const query = bannerQuery
    
    client.fetch(query)
    .then(data => setBannerData(data))
  }, [])
  return (
    <>
      <div className="slider">
           <Swiper
           modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      ref={swiperRef}
    >
      {bannerData?.map(item => {
        return <SwiperSlide key={item._id}>
          <HeaderSlide showNext={showNext} showPrev={showPrev} image={item.image} info={item.info}/></SwiperSlide>
      })}
   <button className="prev-btn" onClick={showPrev}><BsArrowLeftCircle color='#fff' size={30}/></button>
    <button className="next-btn" onClick={showNext}><BsArrowRightCircle color='#fff' size={30}/></button>
    </Swiper>
      </div>
      </>
  )
}

export default Header