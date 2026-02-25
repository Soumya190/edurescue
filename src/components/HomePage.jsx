"use client";
import React, { useEffect, useState } from 'react';
import Styles from '@/Styles/HomePage/homepage.module.scss'
// import * as React from "react"
import { Card, CardContent } from "@/components/ui/Card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel"


const Login = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newsData, setNewsData] = useState([]);

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

  const courses = [
    {
      h1: "EarthQuake",
      p: "Course on EarthQuake"
    },
    {
      h1: "Tsunami",
      p: "Course on Tsunami"
    },
    {
      h1: "Flood",
      p: "Course on Flood"
    },
    // {
    //   h1:"Fire",
    //   p:"Course on Fire"
    // },
  ]


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
  }

  useEffect(() => {
    const fetchNews = async () => {
      let res = await fetch("https://newsdata.io/api/1/latest?apikey=pub_3ff884d506af452b8feecd9368c91f84&q=fire&country=in");
      let data = await res.json();
      console.log(data);
      setNewsData(data.results);
    }

    fetchNews();
  }, []);


  // useEffect(() => {
  //   const interval = setInterval(() => { nextSlide() }, 5000);
  //   return () => clearInterval(interval);

  // }, [currentIndex])
  // console.log(newsData.language);

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
          {/* <p>Let's prepare ourself for the upcoming disaster , so that no lives be gone becaues of unawareness and ignoring the importance of disaster preparedness .</p> */}

          <div className={Styles.newsSection}>
            {newsData.map((el, idx) => {
              return (
                // <>
                <div className={Styles.news} key={idx}>
                  <img src={newsData[idx].image_url} alt="" className={Styles.newsImages} />
                  <div>{el.title}</div>
                  <div>{el.description}</div>
                </div>
                // </>
              )
            })}
          </div>

        </div>

        {/* <div className={Styles.coursesSection}>
          <h1 className='heading'>Courses we offer</h1>
          <div className={Styles.courseContainer}>
            {courses.map((el, idx) => {
              return (
                <div key={idx} className={Styles.courses}>
                  <h2>{el.h1}</h2>
                  <p>{el.p}</p>
                </div>
              )
            })}
          </div>
        </div> */}

        <Carousel className="w-full max-w-[12rem] sm:max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  )
}

export default Login;