import React from "react";
import Text from "./text";
import styles from "../index.csm";
import SingleSelection from "./singleSelect";
import MultipleSelection from "./multipleSelection";

class index extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

    }

    _render(data = {}) {
        switch (data.type) {
            case 'text':
                return <Text data={data}/>
            case 'singleSelection':
                return <SingleSelection data={data}/>
            case 'MultipleSelection':
                return <MultipleSelection data={data}/>
            case 'custom':
                return <div>
                    <div className={styles.subQsTitle}>{data.question}</div>
                    {data.answers.map((item, index) => {
                        return <div key={index} className={styles.questionBlock}>
                            <label className={styles.index}>
                                q{index + 1}:
                            </label>
                            {this._render(item)}
                        </div>
                    })}</div>
            default :
                return null
        }
    }

    render() {

        return (this._render(this.props.data))
    }

}

export default index