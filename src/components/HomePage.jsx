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

  const news =[
    {
      title : "Flood in Maharashtra",
      description : "Heavy rains have caused severe flooding in Maharashtra, leading to widespread damage and displacement of residents. Rescue operations are underway to assist those affected by the floods."
    },
    {
      title : "Earthquake in Turkey",
      description : "A powerful earthquake struck Turkey, causing significant destruction and loss of life. Rescue teams are working tirelessly to search for survivors and provide aid to those affected by the earthquake."
    },
    {
      title : "Wildfires in California",
      description : "Intense wildfires have engulfed parts of California, leading to evacuations and extensive damage to homes and natural habitats. Firefighters are battling the flames to contain the spread and protect communities."
    },
    {
      title : "Cyclone in Bangladesh",
      description : "A severe cyclone has hit Bangladesh, causing widespread devastation and loss of life. Rescue efforts are underway to provide relief and support to those affected by the cyclone."
    },
    {
      title : "Tsunami in Indonesia",
      description : "A powerful tsunami has struck Indonesia, resulting in significant damage and loss of life. Rescue teams are working to assist survivors and provide aid to those affected by the tsunami."
    },
  ]

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
        <div className={Styles.about}>
          <h2>About us</h2>
          <p>Unawareness and ignorance can cost life</p>
          <p>Let's prepare ourself for the upcoming disaster , so that no lives be gone becaues of unawareness and ignoring the importance of disaster preparedness .</p>

          <div className={Styles.newsSection}>
            {news.map((el,idx)=>{
            return(
            // <>
            <div className={Styles.news} key={idx}> 
              <div>{el.title}</div>
              <div>{el.description}</div>
            </div>
            // </>
            )
          })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;