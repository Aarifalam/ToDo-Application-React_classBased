import React, { createRef } from "react";
import "./app.css"
import Input from "../../components/Input/input";
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
        // this.input = createRef()  //export default way
        // this creating reference is simply creating a selector, you are directly getting html element 
        // 6 end - now we do not need this if we use ref in Input-component
    }
    //1 just to get the input value do we need to update all components, this is not a good practice.
    // because whenever i am typing over input the app should not get updated because it will update all componets which contains by app

    componentDidMount() {
        // this.input.current.focus()
        this.input.current.focus()
        // current i remove to know go to 6
    }
    // beacuse of this by default it will focus on input 

    updatetodos(newTodos) {
        this.setState(newTodos);
    };

    componentDidMount() {
        this.input.focus()
    }

    updateList() {
        // console.log(this.input.current.value)
        var copyTodos = [...this.state.todos]
        // copyTodos.push(this.input.value)
        // copyTodos.push(this.input.current.value)
        // this value we are getting from the input html tag 
        copyTodos.push(this.input.value)
        // current i remove to know go to 6


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
                    {/* <input ref={this.input} /> */}
                    {/* 4 go to  update list do console.log this will give value and this we are getting from direct input and this is not updating the Dom */}

                    {/* 5 what if we don't have html input we have input component .
                    we can't put ref in the input-component like what we did in input html-tag
                    because in Input-component has multiple componets like div inside it's input component
                    and we can see in html-input is one component where we are giving ref but in that it will not get that where it shout be use ref */}

                    {/* 6 to use ref in Input-component, we simply pass the ref by a prop  */}
                    <Input inputRef={el => this.input = el} />
                    {/* this i called prop forwording */}
                    {/* when inputRef will be called then this.input = el will be element */}
                    {/* now this prop need to call to Input-component */}
                    {/* in this.input only we are getting the element so we will remove the current where we had the current. */}

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