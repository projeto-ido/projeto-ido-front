import React from "react";
import style from "../Pomodoro/pomodoro.module.css"
import { useEffect } from "react";
import { useState } from "react";
import Spotify from "../Spotify/Spotify";

function Cronometro() {

    const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(25 * 60)
    const minutes = Math.floor(totalTimeInSeconds / 60)
    const seconds = totalTimeInSeconds % 60

    useEffect(() => {
        if (totalTimeInSeconds === 0) {
            alert("O tempo acabou!!")
            return
        } else {
            setTimeout(() => {
                setTotalTimeInSeconds(totalTimeInSeconds - 1)
            }, 1000)
        }

    }, [totalTimeInSeconds])



    return (
        <div className={style.corpo}>
            <div className={style.relogio}>
                <div className={style.div_relogio}>
                    <div>
                        <span>{minutes.toString().padStart(2, "0")}</span>
                    </div>
                    <span>:</span>
                    <div>
                        <span>{seconds.toString().padStart(2, "0")}</span>
                    </div>
                </div>

                <div className={style.div_pomodoro}>
                    <Spotify />
                </div>
            </div>
        </div>
    );
}

export default Cronometro;
