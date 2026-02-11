"use client";
import React, { useEffect, useState } from 'react';
import Styles from '@/Styles/HomePage/homepage.module.scss'


const Login = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "/flood.jpg",
      alt: "flood"
    },
    {
      src: "/wolfgang-hasselmann-fsj6Ly_lqOs-unsplash.jpg"
    },
    {
      src: "/sadiq-nafee-nrnd1-fTsdQ-unsplash.jpg"
    },
    {
      src: "/colin-lloyd-5ogKXLAAxvo-unsplash.jpg"
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
  }


  // useEffect(() => {
  //   const interval = setInterval(() => { nextSlide() }, 5000);
  //   return () => clearInterval(interval);

  // }, [currentIndex])

  return (
    <>
      <div className={Styles.mainSection}>
        <div className={Styles.homepage}>
          <div className={Styles.navbar} style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
            <div className={Styles.images}>
              {images.map((el, idx) => {
                return <img key={idx} src={el.src} alt={el.alt} />
              })}
            </div>
            <div className={Styles.heading}>
              <h1>Disaster Prep</h1>
              <div>
                <p>About</p>
                <p>Course</p>
                <p>Preparedness</p>
                <p>Games</p>
              </div>
            </div>
          </div>

          {/* <p className={Styles.heading}>Preparation through education is less costly than learning through tragedy.</p> */}
        </div>
      </div>
    </>
  )
}

export default Login;