import React from 'react'
import TsLogo from './../svg/tsLogo.svg'
import SassSvg from './../svg/sass.svg'
import HtmlSvg from './../svg/html.svg'
import CssSvg from './../svg/css.svg'
import ReduxSVG from './../svg/redux.svg'
import JsSvg_Skill from './../svg/jsSkill.svg'
import React_croos from './../svg/react.svg'
import About from './about'
import ProjectPanel from './projectPanel'

export default function Skills() {
    return (
        <>
            <main class="grid">
                <section class="content_box item1">
                    <h1>Skills</h1>
                </section>
                <section class="card_box item2">
                    <span class="icone devicon-materialui-plain  "></span>
                </section>
                <section class="card_box item3">
               </section>
                <section class="card_box item4">
                    <span class="icone devicon-typescript-plain  colored"></span>
                </section>
                <section class="card_box item5">
                    <span class="icone devicon-redux-original colored"></span>
                </section>
                <section class="card_box item7">
                <span class="icone devicon-sass-original colored "></span>

                </section>
                <section class="card_box item8">

                    <span class="icone devicon-javascript-plain colored"></span>
                </section>
                <section class="card_box item9">
                    <span class="icone devicon-nextjs-original  "></span>
                </section>
                <section class="card_box item10">
                    <span class="icone devicon-css3-plain-wordmark colored"></span>
                </section>
                <section class="card_box item11">

                </section>
            </main>
        </>

    )
}
