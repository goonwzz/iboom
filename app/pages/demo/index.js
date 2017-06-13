import React from "react";
import styles from "Styles/app.csm";
import {Link} from "react-router";
class Demo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

    }

    render() {

        return (<div className={styles.demo}>
            <Link to="/">demo</Link>
        </div>)
    }

}

export default Demo