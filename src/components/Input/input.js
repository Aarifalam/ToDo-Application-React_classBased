import React from "react";

class Input extends React.Component {

    // these commented lines will remove
    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    // }
    // handleChange(e) {
    //     this.props.updatetodos({ value: e.target.value })
    // }

    render() {
        return (
            <div>
                <input ref={this.props.inputRef} />
                {/* <input onChange={this.handleChange} /> */}
            </div>
        );
    };
};
export default Input;