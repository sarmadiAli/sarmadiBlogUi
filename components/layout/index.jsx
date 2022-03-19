import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import imagesloaded from 'imagesloaded'
import { useRef } from 'react'
// svgs
import JsSvg from './../../svg/js.svg'
import React_croos from './../../svg/react.svg'
import TypeScript from './../../svg/tsLogo.svg'

function Layout({ children, ...props }) {
    const [load, setLoad] = useState(false)
    const [progress, setProgress] = useState(0)
    const imgRefs = useRef(null)
    useEffect(() => {
        const images = gsap.utils.toArray('img');
        console.log('acacascasc', children)
        const showDemo = (e) => {
            setLoad(true)
            // gsap.from('.allSection' , {
            //     autoAlpha:0,
            //     y:0,
            // })
        };
        const updateProgress = (e) => {
            let progressedCount = `${Math.round(e.progressedCount * 100 / images.length)}%`
            setProgress(progressedCount)

        }
        imagesloaded(images).on('progress', updateProgress).on('always', showDemo);
    }, [])
    return (
        <>

            {/* { !load && 
                (
                    <div className='loader df aic jcc'>
                            <ul className='uiLoading'>
                                <li className='liLoadin' >
                                   <JsSvg />
                                </li>
                                <li className='liLoadin'>
                                {parseInt > 50 && <JsSvg />}

                                    <React_croos />
                                </li>
                                <li className='liLoadin'>
                                {progress > 80 &&  <React_croos />}

                               
                                </li>
                            </ul>
                            <h1>Loading</h1>


                            <h2 className='loader--text'>{progress}</h2>
                    </div>
                )
            } */}

            { React.cloneElement(children , {ref : imgRefs , load : load})}

            <style jsx>{`
            body{
              
            }
            .loader{
                height: 100vh ;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

            }
            .uiLoading{
                display: flex
            }
            ui , li {
                list-style: none;
            }
            .liLoadin{
                     width: 120px;
                     height:120px;
                    }
                `}</style>

        </>
    )
}

export default Layout
