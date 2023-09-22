import React, { Component } from 'react'

export default class Nameform extends Component {
    constructor(props){
        super(props)
        this.state = {value : ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({value : e.target.value})
    }

    handleSubmit(e){
        alert('the name is: ' + this.state.value)
        e.preventDefault()
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}
