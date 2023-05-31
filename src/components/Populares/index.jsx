import React from 'react'
import Button from './Button'
import fotoPopulares from './populares.json'
import styles from './Populares.module.scss'

export default function Populares() {
    return (
        <aside className={styles.populares}>
            <h2>Populares</h2>
            <ul className={styles.populares__imagens}>
                {fotoPopulares.map((foto) => {
                    return (
                        <li key={foto.id}>
                            <img src={foto.path} alt={foto.alt} />
                        </li>
                    )
                })}
            </ul>
            <Button> Ver mais fotos </ Button>
        </aside>
    )
}
