import React from "react";
import "./app.css"
// import Input from "../../components/Input/input";
import Title from "../../components/Title/title"
import List from "../../components/List";
import Input from "../../components/Input/input";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            todos: []
        }
        this.updatetodos = this.updatetodos.bind(this)
        this.updateList = this.updateList.bind(this)
        this.deleteTodos = this.deleteTodos.bind(this)
    }

    updatetodos(newTodos) {
        this.setState(newTodos);
    };

    componentDidMount() {
        this.input.focus()
    }

    updateList() {
        var copyTodos = [...this.state.todos]
        copyTodos.push(this.input.value)
        this.updatetodos({
            todos: copyTodos
        });
    }

    deleteTodos(index) {
        var copyTodos = [...this.state.todos]
        copyTodos.splice(index, 1)
        this.updatetodos({
            todos: copyTodos
        })
    }

    render() {
        return (
            <div id="App" className="flex">
                <Title title="Todo Application" />
                <div style={{ display: "flex", border: "1px solid blue" }}>
                    <Input inputRef={el => this.input = el} />
                    <button onClick={this.updateList}>Click me</button>
                </div>
                <List todos={this.state.todos}
                    updatetodos={this.updatetodos}
                    deleteTodos={this.deleteTodos} />
            </div >
        )
    }
}
export default App;