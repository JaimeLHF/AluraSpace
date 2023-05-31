import React from 'react'
import Item from './Item/Item'

export default function Card({ itens, styles }) {
    return (
        <ul className={styles.galeria__cards}>
            {itens.map((item) => {
                return (
                    <Item key={item.id} item={item} style={styles} />
                )
            })}
        </ul>
    )
}

