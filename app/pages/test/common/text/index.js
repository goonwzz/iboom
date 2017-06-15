import React from "react";
import {Input} from "antd";
import styles from "./index.csm";
class Text extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        this.setState({data: this.props.data})
    }

    render() {
        const {data}=this.state
        return (  <div className={styles.question}>
            <div className={styles.textQuestion}>
                {data.question}
            </div>
            <div className={styles.textAnswer}>
                <span>答：</span>
                <div className={styles.textAnswerInput}>
                    <Input type="textarea" value={data.userAnswer} onChange={(e) => {
                        data.userAnswer = e.target.value;
                        this.setState(this.state)
                    }}/>
                </div>
            </div>
        </div>)
    }

}

export default Text