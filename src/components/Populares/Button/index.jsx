import React from 'react'
import style from './Botao.module.scss'

export default function Button({children}) {
  return (
    <button className={style.botao}>{children}</button>
  )
}