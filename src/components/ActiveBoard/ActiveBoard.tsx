import { useState } from "react";
import s from "./activeBoard.module.css"



function ActiveBoard(props: any) {
    return <>
        <div className={s.activeBoardBody}>
            <div className={s.boardBasic}>
                <p>What shall we call the board?</p>
                <label htmlFor="mainName">
                    <input id="mainName" className={s.inputData} />
                </label>
            </div>
            <div className={s.boardButtonGroup}>
                <button className={s.cancelBut} onClick={props.closeBoard}>CANCEL</button>
                <button className={s.createBut}>CREATE</button>
            </div>
        </div>
    </>
}

export default ActiveBoard;