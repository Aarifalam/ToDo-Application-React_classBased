import React from "react";

class Input extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }; // this object is immutable
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log(e.target.value)
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange} />
                <p>{this.state.value}</p>
            </div>
        );
    };
};
export default Input;