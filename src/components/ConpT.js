
import React, { Component } from 'react'

export class ConpT extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: ""
        };
        // this.onChange = this.onChange.bind(this)
        // this.onChange2 = this.onChange2.bind(this)
        // these are for two function wich are below


        this.onChange = this.onChange.bind(this)


    }
    // onChange(e) {


    //     this.setState({
    //         firstName: e.target.value,
    //     })
    //     console.log(this.state.firstName)

    // }

    // onChange2(e) {


    //     this.setState({
    //         lastName: e.target.value
    //     })
    //     console.log(this.state.lastName)

    // }

    // {/* these two functions also help usy to do for the input type accessibility */ }



    onChange(e) {
        console.log(e.target.name)
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value

            // these upper two lines are making these two below lines 
            // { ["name"]: 354 }
            // {name: 354 }
        })
    }



    render() {
        return (
            <div>

                {/* these 44-54 lines are working for these two below lines  */}
                <input type="text" name='firstName' value={this.state.firstName} onChange={this.onChange} />
                <input type="text" name='lastName' value={this.state.lastName} onChange={this.onChange} />


                {/* these 20-40 lines are working for these two below lines  */}
                {/* <input type="text" value={this.state.firstName} onChange={(e) => this.setState({ ...this.state, firstName: e.target.value })} />
                <input type="text" value={this.state.lastName} onChange={(e) => this.setState({ ...this.state, lastName: e.target.value })} /> */}
                {/* this is the way to do for the input type accessibility */}

                <p>first name = {this.state.firstName}</p>
                <p>last name = {this.state.lastName}</p>
            </div>
        )
    }
}

export default ConpT