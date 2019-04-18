import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom'

import { Button } from 'semantic-ui-react'

const Header = (props) => {
  return (
    <div className="nav-bar">
      <ul>
        <li onClick={()=> props.history.push("/")} className="nav-item">
        <h2 id="title">LIST-IT</h2></li>
      </ul>
        <div id="button-log">
        <Button onClick={()=> props.history.push("/login")} primary>Login</Button>
        <Button onClick={()=> props.history.push("/signup")} secondary>Sign Up</Button>
        </div>
    </div>
  );
}

export default withRouter(Header)
