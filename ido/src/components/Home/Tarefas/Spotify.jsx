import React from "react";
import style from '../Home.module.css';


export default function Spotify({ }) {
    return (
        <div className={style.container_spotify}>
            <iframe className={style.spotify_card}
                src="https://open.spotify.com/embed/episode/7bRgPhOkmlU5H35l1ehbCM?utm_source=generator&theme=0" frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>
        </div>
    );
}