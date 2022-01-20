// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { forwardRef, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import sarmadiImg from './../public/image/alisarmadi2.jpg'
import SvgComponent from './../components/SVGReact'
import SvgJs from './../components/SVGJS'
// svgs
import JsSvg_ringLeft from './../svg/js.svg'
import React_croos from './../svg/react.svg'
import TypeScript_ringRight from './../svg/typeScript.svg'



const Home = () => {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  const img = useRef(null)
  useEffect(() => {
    gsap.from(".hero__image", {
      scale: 8,
      transformOrigin: "center center",
      ease: "expo",
      scrollTrigger: {
        trigger: ".hero__image",
        start: "center center",
        end: "center top",
        pin: true,
        scrub: 0.5
      }
    });

    gsap.fromTo(
      img.current,
      {
        opacity: 0,
        objectPosition: "center 0%",
        y: 100
      },
      {
        opacity: 1,
        duration: 2,
        objectPosition: "center 15%",
        y: 0,
        ease: "expo.inOut"
      }
    );

    gsap.to(".cross_1", {
      rotate: "+=360",
      scrollTrigger: {
        trigger: ".cross_1",
        start: "bottom bottom",
        end: "bottom top",
        pin: false,
        scrub: 0.5,
        // markers:true 
      }
    });

    gsap.to(".cross_2", {
      rotate: 360 * 4,
      scrollTrigger: {
        trigger: ".cross_2",
        start: "bottom bottom",
        end: "bottom top",
        pin: false,
        scrub: 0.5
      }
    });



    gsap.to(".ring--left", {

      // top: "50px",
      scale: 2,
      ease: "power4",
      // transformOrigin: "center center",
      scrollTrigger: {
        trigger: ".ring--left",
        start: "center+=100% center",
        end: "bottom+=300 top",
        pin: true,
        scrub: 0.25,
        // markers: true

      }
    });
    gsap.to(".ring--right", {

      // top:'400px ',
      scale: 4,
      ease: "power4",
      // transformOrigin: "center center",
      scrollTrigger: {
        trigger: ".ring--right",
        start: "top center",
        end: "bottom+=300 200px",
        pin: true,
        scrub: 0.25,
        // markers:true

      }
    });
    gsap.to(".hero__title--1", {
      xPercent: -50,
      scrollTrigger: {
        trigger: ".hero__title--1",
        start: "center center",
        pin: true,
        scrub: 0.5,

      }
    });

    gsap.to(".hero__title--2", {
      xPercent: 50,
      scrollTrigger: {
        trigger: ".hero__title--2",
        start: "center center",
        pin: true,
        scrub: 0.5
      }
    });
    gsap.to(".hero__copy", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero__copy",
        start: "top 60%",
        end: "+=60 60%",
        pin: false,
        scrub: 0.5,

      }
    });

    gsap.to(".box", {
      y: 350,
      x: "-10vw",
      ease: "power.in",
      scrollTrigger: {
        trigger: ".box",
        start: "top bottom",
        end: "bottom top",
        scrub: true,

      }
    });

    gsap.from(".line", {
      scaleX: 0,
      transformOrigin: "left center",
      ease: "power.in",
      scrollTrigger: {
        trigger: ".line",
        start: "center 55%",
        end: "bottom 30%",
        scrub: 0.5,
        pin: false,
        markers: true

      }
    });
    gsap.from('.fa-chevron-down', {
      opacity: 0,
      scale: 0,
      duration: 1,
      ease: "back"
  });
  gsap.to('.fa-chevron-down', {
      y: -10,
      duration: 0.75,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
  });
  
  }, [])
  return (
    <>
      <section className="section section--intro">
        <img ref={img} className='hero__image' src={sarmadiImg.src} alt="aliSarmadi" />
        <React_croos className='cross_1' />
        <React_croos className='cross_2' />
        <JsSvg_ringLeft className='ring ring--left' />
        <JsSvg_ringLeft className="ring ring--right" />
        {/* <TypeScript_ringRight  className="ring ring--right"/> */}

        {/* <div className="ring ring--right"></div> */}

        <h3 className="hero__title hero__title--1">HI,I'M ALI SARMADI</h3>
        <h3 className="hero__title hero__title--2">WEB DEVELOPER</h3>

        <p className="hero__copy">
          <span>Scroll</span> 
          <span className="chevron-down">
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
          </span>
          </p>
          
      </section>

      <section className="section section--text">
        <div className="box">
          An ambitious problem solver .
          I have  experience of creating logical and innovative solutions to complex problems.
          I am thorough and precise in everything I do, and have a keen interest in technology and web applications.
          As someone who takes responsibility for his own personal development,
          I am continually evaluating and upgrading my skills so that I stay at the cutting edge of web development.
     

          <div className="line"></div>
        </div>
      </section>
      <div id='con' > </div>


    </>
  )
}

export default Home;