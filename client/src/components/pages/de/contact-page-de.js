import React from "react";

import "../../../assets/css/layouts.css";

class ContactPageDe extends React.Component {

    render() {
        return (<div className="contentColumn contentPage">
                <h1>Über uns</h1>
                <p className="centered">
                    Hallo! Wir sind Lukas (Coding, Design und Artwork) und Theresa (Design, Artwork und seelisch-moralische
                    Unterstützung), sind beide große Brettspielfans und haben zusammen Diximus als online-Version eines unserer
                    Lieblingsspiele entwickelt.
                </p>
                <p className="centered">
                    Falls ihr Fragen, Anregungen oder Wünsche habt, schreibt uns gerne eine Mail:&nbsp;
                    <a href="mailto:diximus.team@gmail.com">diximus.team@gmail.com</a>
                </p>
                <p className="centered">
                    Falls ihr selbst Künstler seid und selbst Karten für dieses Spiel gestalten wollt, würden wir uns
                    natürlich sehr freuen! Nehmt gerne per Mail zu uns Kontakt auf.
                </p>
                <p className="centered">
                    Weitere Projekte, an denen wir beteiligt waren oder sind, könnt ihr unter anderem hier finden: <br/>
                    <a href="https://lukaswho.itch.io/" target="_blank" rel="noreferrer">
                        https://lukaswho.itch.io/
                    </a><br/>
                    <a href="https://soundcloud.com/lukas-who-892512337" target="_blank" rel="noreferrer">
                        https://soundcloud.com/lukas-who-892512337
                    </a>
                </p>
                <hr className="separator"/>
                <h2>Weitere Credits</h2>
                <p className="centered">Soundeffekte gefunden auf <a href="http://www.zapsplat.com" target="_blank" rel="noreferrer">
                    https://www.zapsplat.com
                </a></p>
                <hr className="separator"/>
                <h2>Impressum</h2>
                <p>
                    Lukas Schüller<br/>
                    Nerotalstraße 13 Hinterhaus<br/>
                    55124 Mainz<br/>
                    Deutschland<br/>
                    E-Mail: <a href="mailto:diximus.team@gmail.com">diximus.team@gmail.com</a>
                </p>
        </div>)
    }
}


export default ContactPageDe;