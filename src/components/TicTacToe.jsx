import React, { useState } from 'react'
import TContext from '../context/TContext';
import Board from './Board'
import Status from './Status';

export default function TicTacToe() {
    // cell values
    const [cellVal, setCellVal] = useState(["", "", "", "", "", "", "", "", ""]);
    // X and O status
    const [isX, setIsX] = useState(true);

    // cell click func
    const cellClick = (id) => {
        if (cellVal[id] === "") {
            const oldCellVal = [...cellVal];
        oldCellVal[id] = isX ? "X" : "O";
            setCellVal(oldCellVal);
            setIsX(e => !e);
        } else {
            alert("Alerdy clicked!")
        }
    };
    
    // restart func
    const restart = () => {
        const oldCellVal = [...cellVal].fill("");
        setCellVal(oldCellVal);
        setIsX(true);
    }

    // context values
    const value = {
        cellVal,
        cellClick,
        isX,
        restart
    }

    return (
        <div className='ticTacToe'>
            <TContext.Provider value={value}>
                <h1 className='text-center text-light'>TIC TAC TOE</h1>
                <Board />
                <Status />
            </TContext.Provider>
        </div>
    )
}
