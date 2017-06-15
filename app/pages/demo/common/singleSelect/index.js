import React from "react";
import {Radio} from "antd";
import styles from "./index.csm";
const RadioGroup = Radio.Group;
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
        const ABCD = ['A', 'B', 'C', 'D']
        return (  <div className={styles.question}>
            <div className={styles.textQuestion}>
                {data.question}
            </div>
            <div className={styles.textAnswer}>
                <RadioGroup
                    value={data.userAnswer }
                    onChange={(e) => {
                        data.userAnswer = e.target.value;
                        console.log(e.target.value)
                        this.setState(this.state)
                    }}
                >
                    {
                        data.answers && data.answers.map((item, index) => {
                            return <Radio key={index}
                                          value={`${ABCD[index]}`}>
                                <span className={styles.select}>{`${ABCD[index]}.`}</span>

                                <span className={styles.answer}>{item.answer}</span>

                            </Radio>
                        })
                    }
                </RadioGroup>
            </div>
        </div>)
    }


}

export default Text