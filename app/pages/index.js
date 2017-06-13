import React from "react";
import {Link} from "react-router";

class Index extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

    }

    render() {

        return (<div>
            {this.props.children || <div><Link to="/demo">index</Link></div>}
        </div>)
    }

}

export default Index