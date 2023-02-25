import { useState, useEffect } from "react";
import ActiveBoard from "../ActiveBoard/ActiveBoard";
import s from "./startBoard.module.css"



const StartBoard: React.FC = () => {

    const [mode, setMode] = useState({
        isOpen: false,
        title: "Create a new board...",
    })

    const showActiveMode = () => {
        setMode({
            isOpen: !mode.isOpen,
            title: mode.title === "Creating a board" ? "Create a new board..." : "Creating a board"
        })
        // console.log("ACTIVATE MODE")
    }

    return <>
        <div className={s.boardBody} >
            <div className={s.boardTittle} onClick={showActiveMode}>
                <span>{mode.title}</span>
                {mode.isOpen &&
                    <button className={s.closeButton} >
                        <svg className={s.closeLogo} />
                    </button>
                }
            </div>
            {mode.isOpen && <ActiveBoard closeBoard={showActiveMode} />}
        </div>
    </>
}

export default StartBoard;