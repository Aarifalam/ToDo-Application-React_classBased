import { Component } from "react";

class List extends Component {

    // deleteTodos(index) {
    //     console.log(index)
    // }

    render() {
        // console.log(this.props.todos)



        return (
            <ul>
                {
                    // html dynamic building

                    this.props.todos
                    && Array.isArray(this.props.todos)
                    && this.props.todos.map((todo, index) => (

                        <li key={`${todo}_${index}`}>{todo} {" "}
                            <button onClick={() => this.props.deleteTodos(index)}>X</button>
                        </li>
                        // whenever you are using javascript returning this dynamically created html then you need to give a key prop
                        // react can't give id to html and also can't give classes it will colide with others, for to access a html 

                    ))
                    // if (this.props.todos)
                }

                {/* <li>{this.props.todos}</li> */}
            </ul>
        )
    }
}
export default List;