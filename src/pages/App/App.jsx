import React from "react";
import "./app.css"
import Input from "../../components/Input/input";
import Title from "../../components/Title/title"

class App extends React.Component {
    // constructor() {

    // }
    render() {
        return (
            <div id="App" className="flex">
                {/* <h1>Todo Application {this.props.attr}</h1>  this we were passing from here only */}
                <Title title="Todo Application" />

                {/* <input />  this  we are passing from here only*/}

                <Input />
                {/* but this input we are passing from the component/input/input.js file */}

            </div>
        )
    }

}
export default App;