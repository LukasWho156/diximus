import React from "react";
import { useNavigate } from "react-router-dom";

import BeeBox from "../shared/bee-box";
import CopyrightInfo from "../shared/copyright-info";

import '../../assets/css/layouts.css';
import '../../assets/css/opening-animation.css';

import bushLeftFront from '../../assets/images/bush_front_left.png'
import bushLeftMiddle from '../../assets/images/bush_middle_left.png'
import bushLeftBack from '../../assets/images/bush_back_left.png'
import bushRightFront from '../../assets/images/bush_front_right.png'
import bushRightMiddle from '../../assets/images/bush_middle_right.png'
import bushRightBack from '../../assets/images/bush_back_right.png'
import sparkles from '../../assets/images/sparkles.gif'
import bunny from '../../assets/images/bunny.gif'


class IndexPageComponent extends React.Component {

    onClick = () => {
        this.props.navigate('create')
    }

    render() {
        return(
            <div style={{width: '100%', height: '100%', position: 'absolute', userSelect: 'none', cursor: 'pointer'}} onClick={this.onClick}>
                <div className="bush left" style={{width: '900px'}}>
                    <img src={bushLeftBack} alt="" className="bush left back" />
                    <img src={bushLeftMiddle} alt="" className="bush left middle" />
                    <img src={bushLeftFront} alt="" className="bush left front" />
                </div>
                <div className="bush right" style={{width: '900px'}}>
                    <img src={bushRightBack} alt="" className="bush right back" />
                    <img src={bushRightMiddle} alt="" className="bush right middle" />
                    <img src={bushRightFront} alt="" className="bush right front" />
                </div>
                <div className="fadeIn" style={{display: 'flex', width: '100%', height: '100%'}}>
                    <BeeBox />
                    <div className="contentColumn" style={{height: '100%', justifyContent: 'center'}}>
                        <div style={{position: 'relative'}}>
                            <h2>Let's play</h2>
                            <img src={sparkles} alt="" style={{position: 'absolute', width: '150%', left: '-25%', top: '-5%'}}/>
                        </div>
                        <h1 className="superheader">Diximus</h1>
                        <div style={{height: '2em'}}></div>
                        <img src={bunny} alt="Bunny" style={{height: '50%'}}/>
                        <CopyrightInfo />
                    </div>
                    <BeeBox alignRight={true}/>
                </div>
                
            </div>
        );
    }

}

const IndexPage = (props) => {
    return( 
        <IndexPageComponent {...props} navigate={useNavigate()} />
    );
}

export default IndexPage;