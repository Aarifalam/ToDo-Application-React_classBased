import React from "react";

class Input extends React.Component {


    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        // console.log(e.target.value)
        this.props.updatetodos({ value: e.target.value })
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange} />
                {/* <p>{this.state.value}</p>    */}
            </div>
        );
    };
};
export default Input;