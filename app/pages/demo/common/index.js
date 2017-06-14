import React from "react";
import Text from "./text";

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
            default :
                return null
        }
    }

    render() {

        return (this._render(this.props.data))
    }

}

export default index