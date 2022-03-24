import { forwardRef, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import sarmadiImg from './../public/image/alisarmadi2.jpg'
// svgs
import JsSvg_ringLeft from './../svg/js.svg'
import React_croos from './../svg/react.svg'

import About from '../components/about';
import Panels from '../components/panels';


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
      },
      {
        opacity: 1,
        duration: 2,
        
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
        end: "bottom top",
        pin: true,
        scrub: 0.5,
        // markers: true


      }
    });
    gsap.to(".box", {
      y: 350,
      // x: "9vw",
      ease: "power.in",
      scrollTrigger: {
        trigger: ".box",
        start: "top bottom",
        end: "bottom top",
        scrub: true,

      }
    });


const nTl = gsap.timeline();

    const tl = gsap.timeline();
    tl.from(".two", {xPercent: -100})
    .from(".three", {xPercent: 100})
    .from(".four", {yPercent: -100})
    .from(".five", {xPercent: -100})
    // .from('.one' ,{y : 350})
    ScrollTrigger.create({
      animation: tl,
      trigger: ".instructions",
      start: "top top",
      end: "+=4000",
      scrub: true,
      pin: true,
      anticipatePin: 1
  });
  ScrollTrigger.create({
    animation: nTl,
    trigger: ".one",
    start: "right 1px",
    end: "bottom bottom",
    markers: false,
    yoyo: true,
    ease: "sine.inOut",
    scrub: 1
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
      {/* <section className="section section--about">
        <About />
      </section> */}
      <div class="instructions">

        <Panels />
      </div>




    </>
  )
}

export default forwardRef(Home)