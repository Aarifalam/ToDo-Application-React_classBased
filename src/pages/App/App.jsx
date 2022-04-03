import React from "react";
import "./app.css"
import Input from "../../components/Input/input";
import Title from "../../components/Title/title"
import List from "../../components/List";
// import ConpT from "../../components/ConpT";     //this is for to clear concept

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            todos: []
        }            //this is the state of  todo data which we will pass in list 
        this.updatetodos = this.updatetodos.bind(this)
        this.updateList = this.updateList.bind(this)
        this.deleteTodos = this.deleteTodos.bind(this)
    }

    updatetodos(newTodos) {
        this.setState(newTodos);
    };

    updateList() {
        var copyTodos = [...this.state.todos]
        // console.log(copyTodos)
        copyTodos.push(this.state.value)
        this.updatetodos({
            value: "",
            todos: copyTodos
        });
    }

    deleteTodos(index) {
        var copyTodos = [...this.state.todos]
        copyTodos.splice(index, 1)
        this.updatetodos({
            value: "",
            todos: copyTodos
        })

    }

    render() {
        return (
            <div id="App" className="flex">

                <Title title="Todo Application" />
                <div style={{ display: "flex", border: "1px solid blue" }}>
                    <Input todos={this.state.value} updatetodos={this.updatetodos} deleteTodos={this.deleteTodos} />
                    <button onClick={this.updateList}>Click me</button>
                </div>
                <List todos={this.state.todos}
                    updatetodos={this.updatetodos}
                    deleteTodos={this.deleteTodos} />


                {/* <ConpT /> */}
                {/* this is for to clear the concept of how to take input and it's working things */}

            </div >
        )
    }

}
export default App;