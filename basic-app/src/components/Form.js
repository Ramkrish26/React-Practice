import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            comment : ''
        }
    }

    handleUsername = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    handleComment = (event) => {
        this.setState({
            comment : event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`The username is ${this.state.userName} and his comment is ${this.state.comment}`)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <br/>
                    <label>UserName</label>
                    <input type='text' value={this.state.userName} onChange={this.handleUsername}></input>                    
                </div>
                <div>
                    <br/>
                    <label>Comment</label>
                    <textarea value={this.state.comment} onChange={this.handleComment}></textarea>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        )
    }
}

export default Form
