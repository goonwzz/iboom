import React from "react";
import styles from "./index.csm";
class Index extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

    }

    render() {

        return (<div className={styles.zh}>
            <div className={styles.all}>
                <div className={styles.head}>
                    png没有标注信息。
                </div>
            </div>
        </div>)
    }

}

export default Index