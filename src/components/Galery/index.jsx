import React, { useState } from 'react'
import Tags from '../Tags'
import styles from '../Galery/Galery.module.scss'
import fotos from '../Galery/photos.json'
import Card from './Card'

export default function Galery() {

  const [itens, setItens] = useState(fotos);

  const tags = [...new Set(fotos.map((valor) => valor.tag))]

  const filtroFotos = (tag) => {
    const novasFotos = fotos.filter((foto) => {
      return foto.tag === tag;
    })

    setItens(novasFotos)
  }

  return (
    <section className={styles.galeria}>
      <h2 >Navegue Pela Galeria</h2>
      <Tags tags={tags} filtro={filtroFotos} setItens={setItens}/>
      <Card itens={itens} styles={styles} />
    </section>
  )
}
