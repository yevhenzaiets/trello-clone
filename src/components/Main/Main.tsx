import s from './main.module.css'
import StartBoard from './../StartBoard/StartBoard'
import { useState } from 'react';

// type PropsType = []

function Main() {
    // const [boards, setNewBoard] = useState({})
    return (
        <main className={s.main}>
            <StartBoard />
        </main>
    )
}

export default Main;