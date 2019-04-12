import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {

  state = {
    notes: [{}],
    note: {}
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

  selectedNote = (note) => {
    this.setState({
      note: note
    })
  }

  render() {
    console.log(this.state.note)
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notes={this.state.notes} selectedNote={this.selectedNote}/>
          <Content note={this.state.note}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
