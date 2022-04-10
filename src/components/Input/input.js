import React from "react";

class Input extends React.Component {
    render() {
        return (
            <div>
                <input ref={this.props.inputRef} />
                {/* this we are acceptinig from app.js as reference prop */}
            </div>
        );
    };
};
export default Input;