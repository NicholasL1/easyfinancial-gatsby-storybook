import React from 'react'

export default function Easybutton({ children, ...rest }) {
  return (
    <div>
      <h1>Hello</h1>
      <button className='button' {...rest}>{ children }</button>
    </div>
  )
}
