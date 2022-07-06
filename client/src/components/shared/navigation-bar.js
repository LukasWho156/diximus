import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../../assets/css/main.css";
import "../../assets/css/layouts.css";

class NavigationBar extends React.Component {

    changeLanguage = (key) => {
        this.props.localization.setLanguage(key);
        if(typeof(this.props.forceRerender) === 'function') this.props.forceRerender();
    }

    render() {
        const gameId = window.localStorage.getItem('diximusGameId');
        console.log(gameId);
        return(<div className="navBar">
            <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
                <div className="diximus" onClick={this.props.onDiximusClick}>Diximus</div>
            </Link>
            <div>
                {gameId ? <span>
                    <Link to={`/${gameId}`} style={{textShadow: 'darkblue 0px 0px 1px'}}>
                        {this.props.localization.localize('nav-bar_return-to-game')}
                    </Link> |&nbsp;
                </span> : null}
                <Link to="/create">{this.props.localization.localize('nav-bar_create-new-game')}</Link> |&nbsp;
                <Link to="/gallery">{this.props.localization.localize('nav-bar_card-gallery')}</Link> |&nbsp;
                <Link to="/about">{this.props.localization.localize('nav-bar_about-diximus')}</Link> |&nbsp;
                <Link to="/contact">{this.props.localization.localize('nav-bar_contact')}</Link>
            </div>
            <DropdownButton id="dropdown-basic-button" variant="info" onSelect={(key) => this.changeLanguage(key)}
                title={this.props.localization.localize("nav-bar_language")}>
                {this.props.localization.availableLanguages.map(language => {
                    return <Dropdown.Item key={language.code} eventKey={language.code}>{language.name}</Dropdown.Item>
                })}
            </DropdownButton>
        </div>)
    }
}

export default NavigationBar;