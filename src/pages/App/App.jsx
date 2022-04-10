import React from "react";
import "./app.css"
// import Input from "../../components/Input/input";
import Title from "../../components/Title/title"
import List from "../../components/List";
import Input from "../../components/Input/input";


// whenever we update the state it will update the UI
// just to get the value of the input tag do we need to update all these conponents, it is not good prectice

// we don't use input tags or much more because we don't want to update the components by our self. that's why we use React. React takes care for it  because react has middle layer which called vertual dom.

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // value: "",
            todos: []
        }
        this.updatetodos = this.updatetodos.bind(this)
        this.updateList = this.updateList.bind(this)
        this.deleteTodos = this.deleteTodos.bind(this)
        // this.input = React.createRef()     //this way can get createRef()
        // this.input = createRef()
    }

    updatetodos(newTodos) {
        this.setState(newTodos);
    };

    // for to focus any thing after we do refress .focus in  componentDiMount function
    componentDidMount() {
        this.input.focus()

        // this.input.current.focus()
    }

    updateList() {
        // console.log(this.input)    // this is object which ha current key and current has input 
        // console.log(this.input.current)    // to get the value of this input
        // console.log(this.input.value)
        // this is exect same as documen.id selector or querry or class. we used this ref because this will not update all component
        // in this case we not updating state or UI

        var copyTodos = [...this.state.todos]
        // console.log(copyTodos)
        copyTodos.push(this.input.value)
        // copyTodos.push(this.input.current.value)
        // copyTodos.push(this.state.value)
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
                    {/* if i do not want to change the reference input */}
                    <Input inputRef={el => this.input = el} />
                    {/* this is prop forwading, when this input will call this.input will become el */}

                    {/* this is for direct input which will not  */}
                    {/* <input ref={this.input} /> */}

                    {/* <Input todos={this.state.value} updatetodos={this.updatetodos} deleteTodos={this.deleteTodos} /> */}
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

// when we were updaing the value it was by default refresh the other component which reaquire the  value