import React from "react";

import NavigationBar from "./navigation-bar";

import "../../assets/css/layouts.css";

class NavBarPage extends React.Component {

    render() {
        return(<div className="scrollablePage" style={{overflowY: this.props.disableScrolling ? 'hidden' : 'auto'}}>
            <NavigationBar {...this.props} />
            {this.props.children}
        </div>)
    }
}

export default NavBarPage;