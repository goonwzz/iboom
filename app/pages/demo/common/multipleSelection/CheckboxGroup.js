import React from "react";
import {Checkbox} from "antd";

class CheckboxGroup extends React.Component {

    /**
     * constructor
     * @param props
     */
    constructor(props) {
        super(props);
        var that = this;
        that.state = {
            options: that.props.options,
            value: that.props.value,
        };
    }

    /**
     * componentDidMount
     */
    componentDidMount() {
        var that = this;
    }

    _handleChange(e) {
        var that = this;
        var checked = e.target["checked"];
        var value = e.target["data-value"];
        if (checked) {
            that.state.value.push(value);
        } else {
            for (var i = 0; i < that.state.value.length; i++) {
                var item = that.state.value[i];
                if (item === value) {
                    that.state.value.splice(i, 1);
                }
            }
        }
        that.setState(that.state, () => {
            if (that.props.onChange) {
                that.props.onChange(that.state.value);
            }
        })

    }

    _checkSelcted(citem) {
        var that = this;
        for (var i = 0; i < that.state.value.length; i++) {
            var item = that.state.value[i];
            if (item === citem.value) {
                return true;
            }
        }
        return false;
    }

    _render() {
        var that = this;
        var data = that.state.options;

        return data.map((item, index) => {
            return (
                <label key={index}
                       className={`ant-checkbox-group-item ant-checkbox-wrapper ${item.className} ${item.disabled ? 'ant-checkbox-group-item-disabled' : ''}`}>
                    <Checkbox
                        data-value={item.value}
                        checked={that._checkSelcted(item)}
                        onChange={that._handleChange.bind(this)}/>
                    <span dangerouslySetInnerHTML={{__html: item.label}}></span>
                </label>
            )
        })
    }

    /**
     * render
     */
    render() {
        return <div className="ant-checkbox-group">
            {this._render()}
        </div>;
    }

}

export default CheckboxGroup
