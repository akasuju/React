import React, { useState } from 'react'

const Counter = () => {
  const [value,setValue]= useState(7);
   
   return (
    <div>
        <h1 className='text 3xl'>{value}</h1>
        <button onClick={() => setValue(value + 1)}>+</button>
        <button onClick={() => value > 0 && setValue(value - 1)}>-</button>
    </div>
  )
}

export default Counter