import React from "react";
import Bee from "./bee";

class BeeBox extends React.Component {

    boxRef;

    constructor(props) {
        super(props);
        this.boxRef = React.createRef();
        this.state = { bees: [] };
    }

    componentDidMount() {
        this.makeBees();
        window.addEventListener('resize', this.makeBees)
    }

    componentWillUnmount() {
        window.removeEventListener('resise', this.makeBees);
    }

    makeBees = () => {
        const width = this.boxRef.current.clientWidth - 80;
        const height = this.boxRef.current.clientHeight - 40;
        const gridHeight = height / 4;
        const gridWidth = 0.75 * gridHeight;
        const xOffset = 40 + (this.props.alignRight ? (width % gridWidth) : 0);
        console.log('offset', xOffset);
        const bees = [];
        let i = 0;
        for(let gridX = 0; gridX < Math.floor(width / gridWidth); gridX++) {
            for(let gridY = 0; gridY < height / gridHeight; gridY++) {
                bees.push(<Bee x={(gridX + Math.random()) * gridWidth + xOffset}
                    y={(gridY + Math.random()) * gridHeight} key={i}/>);
                i++;
            }
        }
        this.setState({ bees: bees })
    }

    render() {
        return(<div ref={this.boxRef} style={{position: 'relative', height: '100%', flexGrow: 1}}>
            {this.state.bees}
        </div>)
    }
}

export default BeeBox