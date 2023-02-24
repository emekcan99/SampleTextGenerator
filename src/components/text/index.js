import React from 'react'
import {  useSelector } from 'react-redux'

import "./styles.css"

function Text() {




  const text = useSelector((state) => state.text.items)
  console.log(text)
  return (
    <div className='text'>{text}</div>
  )
}

export default Text