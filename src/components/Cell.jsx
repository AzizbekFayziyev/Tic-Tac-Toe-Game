import React from 'react'

export default function Cell(props) {
    return (
        <>
            <button onClick={props.cellClick} className='cell'>{props.value}</button>
        </>
    )
}
