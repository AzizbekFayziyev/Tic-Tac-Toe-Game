import React from 'react'
import { useContext } from 'react'
import TContext from '../context/TContext'
import Cell from './Cell'

export default function Board() {
    const value = useContext(TContext);

    return (
        <>
            <div className="board">
              {value.cellVal.map((cell, id) => (
                <Cell cellClick={() => value.cellClick(id)} value={cell}/>
              ))}
            </div>
        </>
    )
}
