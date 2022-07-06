import React from "react";
import { Link } from "react-router-dom";

import { version } from "../../logic/server-url"

class CopyrightInfo extends React.Component {

    render() {
        return(<div className="copyrightInfo">
            Diximus v.{version} [<Link to='/changelog' onClick={e => e.stopPropagation()}>changelog</Link>]<br/>
            Copyright © 2022 Gute LuThe Games
        </div>);
    }

}

export default CopyrightInfo;