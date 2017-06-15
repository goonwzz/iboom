import React from "react";
import {Link} from "react-router";
import {Button} from "antd";

class Index extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

    }

    render() {

        return (<div>
            {this.props.children || <div style={{textAlign: 'center', padding: '50px'}}>
                <Link to="/test"><Button>测试</Button></Link>
                <Link to="/zh"><Button>知乎</Button></Link>

            </div>}
        </div>)
    }

}

export default Index