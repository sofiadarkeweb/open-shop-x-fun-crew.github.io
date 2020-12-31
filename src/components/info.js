import React, { useState } from 'react'
import martin from '../../static/images/martin.png'
import viktor from '../../static/images/viktor.png'
import styles from './info.module.scss'
import { Link } from 'react-scroll'
import styled, { keyframes } from 'styled-components'

const expand = pos => keyframes`
from {
  clip-path: circle(0% at ${pos.x}px ${pos.y}px)
} to {
  clip-path: circle(200% at ${pos.x}px ${pos.y}px)
}
`

const ExpandingDiv = styled.div`
  position: absolute;
  top: 0;
  animation: ${props => expand(props.animationCenter)} 500ms linear;
  animation-fill-mode: forwards;
`

export default function Info(props) {
  /* this is the old way of doing it, helps me understand better, leave for now @emma */
  // const useStateReturn = useState()
  // const hiddenEmail = useStateReturn[0]
  // const sethiddenEmail = useStateReturn[1]

  const [hiddenEmail, sethiddenEmail] = useState(true)

  function togglehiddenEmail() {
    sethiddenEmail(!hiddenEmail)
  }

  return (
    <ExpandingDiv
      animationCenter={props.animationCenter}
      style={{ zIndex: props.onTop ? 90 : 0 }}
    >
      <div id="info" className={styles.info}>
        <figure>
          <img
            className={styles.portrait}
            src={martin}
            alt="Picture of Martin as a child with his father, on the beach."
          />
          <figcaption>Martin 1985.</figcaption>
        </figure>
        <section>
          <button onClick={togglehiddenEmail}>kick up some dust</button>
          <p className={hiddenEmail ? styles.hidden : ''}>info@openshop.se</p>
        </section>
        <div>
          <p>
            Open Shop is filmmaking duo Martin Sandin &amp; Viktor Annerstål.
            Martin writes and directs. Viktor edits and shoots.
          </p>
        </div>
        <figure>
          <img
            className={styles.portrait}
            src={viktor}
            alt="Picture of Viktor as a baby, with his father in their living room. Dad is taking a photo of Martin with an old style camera."
          />
          <figcaption>Viktor 1993.</figcaption>
        </figure>
        <a
          href="https://www.instagram.com/artandpoeticjustice/?hl=en"
          className={styles.links}
        >
          slow-skate with us
        </a>

        <Link
          activeClass="active"
          to="film-list"
          spy={true}
          smooth={true}
          duration={500}
        >
          look here
        </Link>
      </div>
    </ExpandingDiv>
  )
}
