import React from "react";

class Input extends React.Component {
    render() {
        return (
            <div>
                <input ref={this.props.inputRef} />
            </div>
        );
    };
};
export default Input;