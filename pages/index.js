import { forwardRef, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import sarmadiImg from './../public/image/alisarmadi2.jpg'
// svgs
import JsSvg_ringLeft from './../svg/js.svg'
import JsSvg_Skill from './../svg/jsSkill.svg'
import React_croos from './../svg/react.svg'
import TsLogo from './../svg/tsLogo.svg'
import SassSvg from './../svg/sass.svg'
import HtmlSvg from './../svg/html.svg'
import CssSvg from './../svg/css.svg'
import ReduxSVG from './../svg/redux.svg'


const Home = (porps, ref) => {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  const img = useRef(null)

  useEffect(() => {
    gsap.from(".hero__image", {
      scale: 1.5,
      transformOrigin: "center center",
      ease: "expo",
      scrollTrigger: {
        trigger: ".hero__image",
        start: "center center",
        end: "center top",
        pin: true,
        scrub: 0.5,
      }
    });

    gsap.fromTo(
      img.current,
      {
        opacity: 0,
        // objectPosition: "center 0%",
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
    gsap.to(".cross_ٍreact_right", {
      rotate: "+=360",
      scrollTrigger: {
        trigger: ".cross_ٍreact_right",
        start: "bottom bottom",
        end: "bottom top",
        pin: false,
        scrub: 0.5,
      }
    });

    gsap.to(".cross_ٍreact_left", {
      rotate: 360 * 4,
      scrollTrigger: {
        trigger: ".cross_ٍreact_left",
        start: "top bottom",
        end: "bottom top",
        pin: false,
        scrub: 0.5,

      }
    });

    gsap.to(".js__ring__left", {
      scale: 1.2,
      ease: "power4",
      scrollTrigger: {
        trigger: ".js__ring__left",
        start: "center+=100% center+=25%",
        end: "bottom+=300 top+=10%",
        // pin: true,
        scrub: 0.25,
        markers:true    


      }
    });
    // gsap.to(".ring--right", {

    //   // top:'400px ',
    //   scale: 4,
    //   ease: "power4",
    //   // transformOrigin: "center center",
    //   scrollTrigger: {
    //     trigger: ".ring--right",
    //     start: "top center",
    //     end: "bottom+=300 200px",
    //     pin: true,
    //     scrub: 0.25,
    //     // markers:true

    //   }
    // });
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

  }, [])
  return (
    <>




      <section className="section section--intro">
        <img ref={img} className='hero__image' src={sarmadiImg.src} alt="aliSarmadi" />
        <React_croos className='cross_ٍreact_right' />
        <React_croos className='cross_ٍreact_left' />
        <JsSvg_ringLeft className='ring js__ring__left' />
        <JsSvg_ringLeft className="ring js__ring__right" />


        <h3 className="hero__title hero__title--1">HI,I'M ALI SARMADI</h3>
        <h3 className="hero__title hero__title--2">WEB DEVELOPER</h3>

        <p className="hero__copy">
          <span>Scroll</span>
          <span className="chevron-down">
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
          </span>
        </p>

      </section>
      <section id='con' ></section>




    </>
  )
}

export default forwardRef(Home)