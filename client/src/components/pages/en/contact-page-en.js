import React from "react";

import "../../../assets/css/layouts.css";

class ContactPageEn extends React.Component {

    render() {
        return (<div className="contentColumn contentPage">
                <h1>About us</h1>
                <p className="centered">
                    Hey there! We are Lukas (coding, design and artwork) and Theresa (design, artwork and moral support).
                    We both are big fans of <s>bored</s> board games and developed Diximus together as an online version of one of our
                    favourite games.
                </p>
                <p className="centered">
                    If you have questions, feedback or wishes, don't hesitate to contact us via mail:&nbsp;
                    <a href="mailto:diximus.team@gmail.com">diximus.team@gmail.com</a>
                </p>
                <p className="centered">
                    If you are an artist yourself and would like to design cards for this game yourself, we would naturally
                    be very happy! Don't be shy to contact us.
                </p>
                <p className="centered">
                    Here you can find further projects that we were a part of:<br/>
                    <a href="https://lukaswho.itch.io/" target="_blank" rel="noreferrer">
                        https://lukaswho.itch.io/
                    </a><br/>
                    <a href="https://soundcloud.com/lukas-who-892512337" target="_blank" rel="noreferrer">
                        https://soundcloud.com/lukas-who-892512337
                    </a>
                </p>
                <hr className="separator"/>
                <h2>Additional Credits</h2>
                <p className="centered">Sound effects obtained from <a href="http://www.zapsplat.com" target="_blank" rel="noreferrer">
                    https://www.zapsplat.com
                </a></p>
                <hr className="separator"/>
                <h2>Imprint</h2>
                <p>
                    Lukas Schüller<br/>
                    Nerotalstraße 13 Hinterhaus<br/>
                    55124 Mainz<br/>
                    Germany<br/>
                    E-Mail: <a href="mailto:diximus.team@gmail.com">diximus.team@gmail.com</a>
                </p>
        </div>)
    }
}


export default ContactPageEn;