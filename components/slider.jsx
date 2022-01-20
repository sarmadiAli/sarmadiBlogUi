import React, { forwardRef, useImperativeHandle, useRef, useEffect } from 'react'
import horizontalMudle from '../styles/Horizontal.module.css'

function Slider({ gsap, ...rest }, ref) {

    const pinWrap = useRef(null)
    const horizontal = useRef(null)
    const animationWrap = useRef(null)
    const sliderList = [
        { lab: '1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, temporibus esse magni illum eos natus ipsum minus? Quis excepturi voluptates atque dolorum minus eligendi! Omnis minima magni recusandae ex dignissimos.' },
        { lab: '2 Eaque ullam illum nobis deleniti mollitia unde, sed, nemo ipsa ratione ex, dicta aliquam voluptates! Odio vitae eum nobis dignissimos sunt ipsum repellendus totam optio distinctio. Laborum suscipit quia aperiam.' },
        { lab: '3 Animi, porro molestias? Reiciendis dolor aspernatur ab quos nulla impedit, dolores ullam hic commodi nobis nam. Dolorem expedita laudantium dignissimos nobis a. Dolorem, unde quidem. Tempora et a quibusdam inventore!' },
        { lab: '4 Labore, unde amet! Alias delectus hic laboriosam et dolorum? Saepe, dicta eaque? Veniam eos blanditiis neque. Officia et nostrum, tempore modi quo praesentium aspernatur vero dolor, ipsa unde perspiciatis minima.' },
        // { lab: '5 Quaerat error dolorem aspernatur magni dicta ut consequuntur maxime tempore. Animi odio eos quod culpa nulla consectetur? Aperiam ipsam ducimus delectus reprehenderit unde, non laborum voluptate laboriosam, officiis at ea!' },
        // { lab: '6 Temporibus cum dolor minima consequatur esse veritatis enim nemo cupiditate laborum doloribus reiciendis perferendis, quas fugit earum rerum, at beatae alias amet aspernatur dolorem dolore error commodi. Perspiciatis, reiciendis amet!' },
        // { lab: '7 Vitae, tenetur beatae error corrupti odit expedita quisquam commodi ea aspernatur aliquid, eveniet reprehenderit sequi, similique maiores praesentium quam! Optio tenetur saepe unde voluptatem minus tempora maxime temporibus ducimus ullam!' },
        // { lab: '7 Vitae, tenetur beatae error corrupti odit expedita quisquam commodi ea aspernatur aliquid, eveniet reprehenderit sequi, similique maiores praesentium quam! Optio tenetur saepe unde voluptatem minus tempora maxime temporibus ducimus ullam!' },
        // { lab: '7 Vitae, tenetur beatae error corrupti odit expedita quisquam commodi ea aspernatur aliquid, eveniet reprehenderit sequi, similique maiores praesentium quam! Optio tenetur saepe unde voluptatem minus tempora maxime temporibus ducimus ullam!' },
        // { lab: '7 Vitae, tenetur beatae error corrupti odit expedita quisquam commodi ea aspernatur aliquid, eveniet reprehenderit sequi, similique maiores praesentium quam! Optio tenetur saepe unde voluptatem minus tempora maxime temporibus ducimus ullam!' },
    ]
    useImperativeHandle(ref, () => ({
        pinWrap: pinWrap.current,
        horizontal: horizontal,
        animationWrap: animationWrap.current,
    }))
    useEffect(() => {
        if (typeof window !== "undefined") {
            // console.log("data getToValue", -(animationWrap.current.scrollWidth - window.innerWidth))
            var getToValue = () => -(animationWrap?.current?.scrollWidth - window?.innerWidth);
            gsap.fromTo(animationWrap.current, {
                x: () => getToValue()
            }, {
                x: () => 0,
                ease: "none",
                scrollTrigger: {
                    trigger: horizontal.current,
                    start: "top top",
                    end: () => "+=" + (animationWrap?.current?.scrollWidth - window.innerWidth),
                    pin: pinWrap.current,
                    invalidateOnRefresh: true,
                    // anticipatePin: 1,
                    scrub: true,
                    // markers: true,
                }
            });


            console.log("data allend", "+=" + (animationWrap.current.scrollWidth - window.innerWidth))
            console.log("data ani", (animationWrap.current.scrollWidth))
            console.log("data windo", window.innerWidth)

        }


    }, [])

    return (
        <>
            <section ref={horizontal} className={horizontalMudle.horizontal}>
                <div ref={pinWrap} className={horizontalMudle.pinWrap} >
                    <div ref={animationWrap} className={horizontalMudle.animationWrap} >
                        {sliderList.map((ele, index) => ((
                            <div key={index} className={horizontalMudle.item} >
                                {ele.lab}
                            </div>
                        )))}


                    </div>
                </div>
            </section>


            <style jsx>{`
                    section {
                        width: 100%;
                        height: 100%;
                        position: relative;
                        
                    }

      `}</style>
        </>

    )
}

export default forwardRef(Slider)