import React, { createRef } from "react";
import "./app.css"
// import Input from "../../components/Input/input";
import Title from "../../components/Title/title"
import List from "../../components/List";


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

        //3 first we need to create veriable of Ref 
        // this.input = React.createRef()  // other way in below to write this
        this.input = createRef()  //export default way
        // this creating reference is simply creating a selector, you are directly getting html element 
    }
    //1 just to get the input value do we need to update all components, this is not a good practice.
    // because whenever i am typing over input the app should not get updated because it will update all componets which contains by app

    componentDidMount() {
        this.input.current.focus()
    }
    // beacuse of this by default it will focus on input 

    updatetodos(newTodos) {
        this.setState(newTodos);
    };

    // componentDidMount() {
    //     this.input.focus()
    // }

    updateList() {
        // console.log(this.input.current.value)
        var copyTodos = [...this.state.todos]
        // copyTodos.push(this.input.value)
        copyTodos.push(this.input.current.value)
        // this value we are getting from the input html tag 

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

                    {/* <input id="in" /> */}
                    {/*2 we can get input by id or querry selector. it is not recummended to use this.
                    we use React to not update Dom by ourself using document.getElementById or querry.
                    React takes care of it because there is a middle-layer called vertual dom.  */}
                    {/* if you are insistedly giving by document.getElementByid or querry at some place where this input is still not there in the UI  */}
                    {/* to handle this React has something Ref */}
                    <input ref={this.input} />
                    {/* 4 go to  update list do console.log this will give value and this we are getting from direct input and this is not updating the Dom */}

                    {/* <Input inputRef={el => this.input = el} /> */}
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