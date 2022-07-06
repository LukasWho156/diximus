import React from "react";
import ReactMarkdown from "react-markdown";

import NavBarPage from "../shared/nav-bar-page";

import changelog from "../../changelog.md";

class ChangelogPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    componentDidMount() {
        fetch(changelog).then(res => res.text()).then(text => {
            this.setState({ text: text });
        })
    }

    render() {
        return(<NavBarPage {...this.props}>
            <div className="contentPage">
                <ReactMarkdown>{this.state.text}</ReactMarkdown>
            </div>
        </NavBarPage>);
    }
}

export default ChangelogPage;