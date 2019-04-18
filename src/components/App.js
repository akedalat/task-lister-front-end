import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';
import LoginForm from './LoginForm';
import {Switch, Route} from 'react-router-dom'

class App extends Component {

  state = {
    currentUser: null
  }

    setCurrentUser = (user) => {
      this.setState({
        currentUser: user
      },() => this.props.history.push("/"))
    }

  render() {
    console.log(this.props)
    return (
      <div className="app">
        <Header />
        <Switch>
        <Route path='/login' render={(routerProps) => <LoginForm {...routerProps} setCurrentUser={this.setCurrentUser} />} />
        <Route path='/' render={(routerProps) => <NoteContainer {...routerProps}/>} />
        </Switch>
      </div>
    );
  }
}

export default App;
