import React, { useState } from 'react'
import ToggleableFilm from './toggleable-film'

import styles from './film-list.module.scss'

import filmInfo from '../films/films.json'

export default function FilmList(props) {
  const [currentTrailer, setCurrentTrailer] = useState(null)

  function togglePlayer(e, title) {
    setCurrentTrailer(title)
  }

  const filmListItems = filmInfo.films.map(film => {
    return (
      <div id={film.filmURL}>
        <ToggleableFilm
          currentTrailer={currentTrailer}
          togglePlayer={togglePlayer}
          key={filmInfo.films.indexOf(film)}
          image={`screenshots/${film.filmScreenshot}`}
          title={film.filmTitle}
          description={film.filmDescription}
          alt={film.filmTagline}
          url={film.filmURL}
        />
      </div>
    )
  })

  return (
    <ul className={styles.filmList} id="film-list">
      {filmListItems}
    </ul>
  )
}
