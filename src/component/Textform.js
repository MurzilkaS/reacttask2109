import React, { Component } from 'react'

export default class Textform extends Component {
    constructor(props){
        super(props)
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
     
    }
        handleChange(e){
            this.setState({value: e.target.value})
        }

        handleSubmit(e){
            alert('your text is:' + this.state.value)
            e.preventDefault()
        }
    

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <textarea  value={this.state.value} onChange={this.handleChange} />

            <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}