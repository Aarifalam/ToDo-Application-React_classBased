import { Component } from "react";

class List extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.todos
                    && Array.isArray(this.props.todos)
                    && this.props.todos.map((todo, index) => (
                        <li key={`${todo}_${index}`}>{todo} {" "}
                            <button style={{ color: "red" }} onClick={() => this.props.deleteTodos(index)}>x</button>
                        </li>
                    ))
                }
            </ul>
        )
    }
}
export default List;