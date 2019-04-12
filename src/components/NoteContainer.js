import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {

  state = {
    notes: [{}],
  }

  //get Notes
  componentDidMount = () => {
    fetch("http://localhost:3000/api/v1/notes")
    .then(resp => resp.json())
    .then(notes => this.setState({
        notes: notes
      })
    )
  }

  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notes={this.state.notes}/>
          <Content />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
