import React, { forwardRef, useRef, useImperativeHandle, useEffect, memo } from 'react'
import logoImg from './../public/image/aliSarmadiLogo.png'
import Slider from './slider'

const Circal = forwardRef(({ gsap, SliderRefs, ScrollTrigger, ...rest }, ref) => {

    const svg = useRef(null)
    const circle = useRef(null)
    const whiteLayer = useRef(null)
    const img = useRef(null)
    const pad = 4;
    let imgWidth, imgHeight;

    useImperativeHandle(ref, () => ({
        svgCurrent: svg.current,
        circleCurrent: circle.current,
        whiteLayerCurrent: whiteLayer.current,
        img: img
    }))

    const content = useRef()
    const testRef = useRef()

    useEffect(() => {
        let radius = +circle?.current.getAttribute("r");
        // const { horizontal } = SliderRefs.current
        // imgWidth = img?.current?.naturalWidth;
        // imgHeight = img?.current.naturalHeight;


        // imgWidth = horizontal?.current?.clientWidth;
        // imgHeight = horizontal?.current.clientHeight;

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: '',
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            },
            defaults: {
                duration: 1
            }
        }).to(testRef.current, {
            height: '100vh',
            width: '100vw',
        })
            .to(circle.current, {
                attr: {
                    r: () => radius
                }
            }, 0).to(whiteLayer.current, {
                alpha: 0,
                ease: "power1.in",
                duration: 1 - 0.25
            }, 0.25);


        resize();

        function resize() {

            tl.progress(0);
            const r = svg.current.getBoundingClientRect();
            const rectWidth = r.width + pad;
            const rectHeight = r.height + pad;


            const dx = rectWidth / 2;
            const dy = rectHeight / 2;
            radius = Math.sqrt(dx * dx + dy * dy);
            tl.invalidate();
            ScrollTrigger.refresh();
        }
    }, [SliderRefs])

    return (
        <>
            {/* <div id="divContent" ref={testRef} >
            </div> */}
            {/* <img ref={img} id='img' src={logoImg.src} alt="aa" /> */}
            <svg ref={svg} id="svg">
                <defs>
                    <mask id="mask">
                        <rect width="100%" height="100%" fill="white"></rect>
                        <circle ref={circle} id="circle" cx="50%" cy="50%" r="60" fill="black"></circle>
                    </mask>
                </defs>
                <rect id="whiteLayer" ref={whiteLayer} width="100%" height="100%" fill="white"></rect>
                <rect width="100%" height="100%" fill="black" mask="url(#mask)"></rect>
            </svg>
            <div id="content" ref={content}></div>

            <style jsx>{`
              #divContent{
                position: fixed;
                top: 0;
                right: 0;
                height: 100vh;
                width: 100vh;
                background:red;
                }
            #img {
                position: fixed;
                top: 50%;
                left: 50%;
              }
              
      #svg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
      }
      #content {
        height: 2500px;
      }
      `}</style>
        </>
    )
})
export default memo(Circal)