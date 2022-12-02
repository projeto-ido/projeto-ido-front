import React from "react";
import style from "./Pomodoro.module.css"


export default function Pomodoro({}){

    // const horas = document.getElementById('horas');
    // const minutos = document.getElementById('minutos');
    // const segundos = document.getElementById('segundos');

    // const relogio = setInterval(function time(){
    //     let dateToday = new Date();
    //     let hr = dateToday.getHours();
    //     let min = dateToday.getMinutes();
    //     let s = dateToday.getSeconds();

    //     if (hr < 00) hr = '0' + hr; 
        
    //     if (min < 25) min = '0' + min; 

    //     if (s < 00) s = '0' + s; 
        
    //     horas.textContent = hr;
    //     minutos.textContent = min;
    //     segundos.textContent = s;
    // })

    let hour = 0;
    let minute = 0;
    let second = 0;
   

    let cron;

    document.relogio.start.onclick = () => start();
    document.relogio.pause.onclick = () => pause();
    document.relogio.reset.onclick = () => reset();

    function start(){
        pause();
        cron = setInterval(() => {time(); }, 10);
    }
    function pause() {
        clearInterval(cron);
    }
    function reset() {
        hour = 0;
        minute = 0;
        second = 0;
    
        document.getElementById('hour').innerText = 00;
        document.getElementById('minute').innerText = 00;
        document.getElementById('second').innerText = 00;
       
    }

    function timer() {
        if ((millisecond += 10) == 1000) {
            millisecond = 0;
            second++;
        }
            if (second == 60) {
                second = 0;
                minute++;
            }
            if (minute == 60) {
                minute = 0;
                hour++;
        }

        document.getElementById('minute').innerText = returnData(minute);
        document.getElementById('second').innerText = returnData(second);
    
    }

    function returnData(input) {
    return input > 10 ? input : `0${input}`
    }

    return(
        <div className={style.corpo}>
        <div className={style.relogio}>
            <div>
                <span id="horas">00</span>  
                <span className={style.tempo}>Horas</span>
            </div>
    
            <div>
                <span id="minutos">00</span>
                <span className={style.tempo}>Minutos</span>
            </div>
    
            <div>
                <span id="segundos">00</span>
                <span className={style.tempo}>Segundos</span>
            </div>
    
        </div>
    </div>
    );
}

