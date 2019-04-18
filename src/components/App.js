import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm'
import {Switch, Route} from 'react-router-dom'

class App extends Component {

  state = {
    currentUser: null
  }

  logOut = () => {
    localStorage.removeItem("user_id")
    this.setState({
      currentUser: null
    }, () => this.props.history.push("/login"))
  }

  componentDidMount(){
    const userID = localStorage.getItem("user_id")
    if (userID) {
      fetch("http://localhost:3000/api/v1/auto_login",{
        headers:{
          "Authorization": userID
        }
      })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.errors){
          alert(resp.errors)
        } else {
          this.setCurrentUser(resp)
        }
      })
    }
  }

    setCurrentUser = (resp) => {
      this.setState({
        currentUser: resp
      },() => {
          localStorage.setItem("user_id", this.state.currentUser.id)
          this.props.history.push("/")})
    }

  render() {
    return (
      <div className="app">
        <Header logOut={this.logOut} currentUser={this.state.currentUser} />
        <Switch>
        <Route path='/login' render={(routerProps) => <LoginForm {...routerProps} setCurrentUser={this.setCurrentUser} />} />
        <Route path='/signup' render={(routerProps) => <SignupForm {...routerProps} setCurrentUser={this.setCurrentUser} />} />
        <Route path='/' render={(routerProps) => <NoteContainer {...routerProps}/>} />
        </Switch>
      </div>
    );
  }
}

export default App;
