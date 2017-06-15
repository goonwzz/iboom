import React from "react";
import styles from "./index.csm";
import Data from "Mock/data";
import {Button} from "antd";
import Question from "./common";
class Demo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: Data
        }
    }

    componentDidMount() {
        console.log(this.state.data)
    }

    render() {
        const {name, introduce, questions} =this.state.data

        return (<div className={styles.pages}>
            <h1 className={styles.title}>{name}</h1>
            <p>{introduce}</p>
            <div className={styles.splitLine}></div>

            {questions.map((item, index) => {
                return <div key={index} className={styles.questionBlock}>
                    <label className={styles.index}>
                        Q{index + 1}:
                    </label>
                    <Question data={item}/>
                </div>
            })}

            <div className={styles.submit}>
                <Button type="primary" onClick={this._submit.bind(this)}>确认提交</Button>
            </div>
        </div>)
    }

    _submit() {
        const {questions}= this.state.data

        var getAnswer = (data = []) => {
            let answers = []
            data.map((item, index) => {
                var userAnswer = {}
                if (item.type == 'custom') {
                    userAnswer[`Q${index + 1}`] = getAnswer(item.answers)
                } else {
                    userAnswer[`Q${index + 1}`] = item.userAnswer
                }

                answers.push(userAnswer)
            })
            return answers
        }
        console.log(JSON.stringify(getAnswer(questions)))
    }

}

export default Demo