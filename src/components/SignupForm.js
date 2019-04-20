import React from 'react'
import { Form, Button } from 'semantic-ui-react'

class SignupForm extends React.Component {
	state = {
		name: "",
		email: "",
		password: "",
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	createUser = () => {
		fetch("http://localhost:3000/api/v1/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json",
			},
			body: JSON.stringify(this.state)
		})
		.then(res => res.json())
		.then((response) => {
			if (response.error){
				alert(response.error)
				
			} else {
				this.props.setCurrentUser(response)
			}
		})
	}

	handleSubmit = () => {
		this.createUser()		
	}

	render(){
		return (
			<Form onSubmit={this.handleSubmit}>
		    <Form.Field>
		      <label>Name</label>
		      <input onChange={this.handleChange} name="name" value={this.state.name} placeholder='name' />
		    </Form.Field>
		    <Form.Field>
		      <label>Email</label>
		      <input onChange={this.handleChange} name="email" type="email" value={this.state.email} placeholder='Email' />
		    </Form.Field>
		    <Form.Field>
		      <label>Password</label>
		      <input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder='Password' />
		    </Form.Field>
		    <Button type='submit'>Submit</Button>
		  </Form>
		)
	}
}

export default SignupForm
