import React from 'react'


const Box = (props) => {
  return (
    <div className="boxProject">
      <div className="boxProject__title">
        <h3>
          Git an
        </h3>
      </div>
      <div className="boxProject__description">
        <p>
          Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people.
        </p>
      </div>
    </div>
  )
}

export default function ProjectPanel() {
  return (
    <>
      <main class="grid">
        <section class="content_box item1">
          <h1>Projects</h1>
          {/* <p>By animating a few CSS paint & composite properties, we can create fun interactions on hover & focus</p> */}
        </section>
        <section class="card_box item2">
          <h2>Hover the card_boxs</h2>
        </section>
        <section class="card_box item3"></section>
        <section class="card_box item4"></section>
        <section class="card_box item5">
          <h2>because interactions make it more fun</h2>
        </section>
        <section class="card_box item7"></section>
        <section class="card_box item8">
          <h2>animating the shadow on the pseudo element makes it pop out</h2>
        </section>
        <section class="card_box item9"></section>
        <section class="card_box item10"></section>
        <section class="card_box item11">
          <h2>add a :focus state too!</h2>
        </section>
      </main>
    </>
  )
}
