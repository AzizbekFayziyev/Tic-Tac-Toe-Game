import React from 'react'
import { useContext } from 'react'
import TContext from '../context/TContext'

export default function Status() {
    const value = useContext(TContext);

  return (
    <div className='my-1'>
    <h3 className='text-light'>Next: {value.isX ? "X" : "O"}</h3>
    <button onClick={value.restart} className='btn btn-primary btn-sm d-block mx-auto'>RESTART</button>
    </div>
  )
}