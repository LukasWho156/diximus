import React from "react";

import bee from "../../assets/images/bee.gif"

class Bee extends React.Component {

    render() {
        return <img src={bee} alt="" style={{position: 'absolute', width: '40px', height: '40px',
            left: `${this.props.x}px`, top: `${this.props.y}px`,
            animationDelay: `${Math.random() * -3}s`}} className="bee" />
    }

}

export default Bee;