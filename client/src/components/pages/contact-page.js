import React from "react";

import NavBarPage from "../shared/nav-bar-page";
import CopyrightInfo from "../shared/copyright-info";
import ContactPageDe from "./de/contact-page-de";
import ContactPageEn from "./en/contact-page-en";

import { version } from "../../logic/server-url";

class ContactPage extends React.Component {

    renderInner() {
        switch(this.props.localization.language) {
            case 'de':
                return <ContactPageDe />
            default:
                return <ContactPageEn />
        }
    }

    render() {
        return <NavBarPage localization={this.props.localization} forceRerender={this.props.forceRerender}>
            {this.renderInner()}
            <CopyrightInfo />
        </NavBarPage>
    }
}


export default ContactPage;