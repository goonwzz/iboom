import React from "react";
import CheckboxGroup from "./CheckboxGroup.js";
import styles from "./index.csm";
class Text extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
        }

    }

    componentDidMount() {
    }

    render() {
        const {data}=this.state
        const ABCD = ['A', 'B', 'C', 'D']
        var options = data.answers && data.answers.map((item, index) => {
                return {
                    label: `${ABCD[index]}. ${item.answer}`,
                    value: ABCD[index],
                    className: styles.checkbox
                }
            });
        return (  <div className={styles.question}>
            <div className={styles.textQuestion}>
                {data.question}
            </div>
            <div className={styles.textAnswer}>
                <CheckboxGroup options={options}
                               value={data.userAnswer || []}
                               onChange={(v) => {
                                   data.userAnswer = v
                               }}/>
            </div>
        </div>)
    }


}

export default Text