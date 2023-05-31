import React from 'react'
import styles from '../Tags/Tags.module.scss'
import photos from '../Galery/photos.json'

export default function Tags({ tags, filtro, setItens }) {
 
  return (
    <div className={styles.tags}>
      <p>Filtre por Tags: </p>
      <ul className={styles.tags__lista}>
        {tags.map((tag) => {
          return (
            <li key={tag} onClick={() => filtro(tag)} >{tag}</li>
          )
        })}
        <li onClick={() => setItens(photos)}>Todas</li>
      </ul>
    </div>
  )
}
