import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first_name: "",
         last_name: "",

      }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios
            .post('https://program-1655722851205.azurewebsites.net/Home/addactor', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { first_name, last_name } = this.state
        return (
        <div>
        <form onSubmit={this.submitHandler}>
            <div>
            <input type="text" 
            name="first_name"  
            value={first_name} 
            onChange={this.changeHandler}
            />
        </div>
        <div>
            <input type="text" 
            name="last_name"
            value={last_name} 
            onChange={this.changeHandler}/>
        </div>
        <button type="submit"> Submit </button>
      </form>
      </div>
    )
  }
}

export default PostForm