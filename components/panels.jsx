import React from 'react'
import TsLogo from './../svg/tsLogo.svg'
import SassSvg from './../svg/sass.svg'
import HtmlSvg from './../svg/html.svg'
import CssSvg from './../svg/css.svg'
import ReduxSVG from './../svg/redux.svg'
import JsSvg_Skill from './../svg/jsSkill.svg'
import React_croos from './../svg/react.svg'
import About from './about'
import Skills from './skills'
import TimeLine from './timeLine'
import ProjectPanel from './projectPanel'
import ContectMe from './contectMe'

export default function Panels() {
    return (
        <>
            <div class="panel one">
                <About />
            </div>
            <div class="panel two">
                <Skills />
            </div>

            <div class="panel three">
                <TimeLine />
            </div>
            <div class="panel four">
                <ProjectPanel />
            </div>


        </>

    )
}
