import React from "react";

class Index extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

    }

    render() {

        return (<div>
            {this.props.children || <div>index</div>}
        </div>)
    }

}

export default Index