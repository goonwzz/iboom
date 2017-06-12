import React from "react";
import styles from "Styles/app.csm";

class Index extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

    }

    render() {

        return (<div className={styles.app}>
            {this.props.children || <div>index</div>}
        </div>)
    }

}

export default Index