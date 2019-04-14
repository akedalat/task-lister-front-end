import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

const baseUrl = "http://localhost:3000/api/v1/notes"


class NoteContainer extends Component {

  state = {
    notes: [{}],
    note: {}
  }

  // Get Notes
  componentDidMount = () => {
    fetch(baseUrl)
    .then(resp => resp.json())
    .then(notes => this.setState({
        notes: notes
      })
    )
  }

  // Update Note
  updateNote = (note) => {
    fetch(baseUrl + `/${note.id}`, {
      method: "PATCH",
      body: JSON.stringify(note),
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((res => res.json()))
  }

  selectedNote = (note) => {
    this.setState({
      note: note
    })
  }

  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notes={this.state.notes} selectedNote={this.selectedNote}/>
          <Content note={this.state.note} updateNote={this.updateNote}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
