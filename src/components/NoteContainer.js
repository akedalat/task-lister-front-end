import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

const baseUrl = "http://localhost:3000/api/v1/notes"


class NoteContainer extends Component {

  state = {
    notes: [],
    note: {},
    edit: false,
    searchTerm: ""
  }

  //To Rerender Notes when updateNote or createNote are invoked
  fetchNotes = () => {
    fetch(baseUrl)
    .then(resp => resp.json())
    .then(notes => this.setState({
        notes: notes
      })
    )
  }
  
  // Get Notes
  componentDidMount = () => {
    this.fetchNotes()
  }

  // Update Note
  updateNote = (note, note_id) => {
    fetch(baseUrl + `/${note_id}`, {
      method: "PATCH",
      body: JSON.stringify(note),
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((res => res.json()))
    .then(this.fetchNotes)
  }

  //Create Note
  createNote = (note) => {
    fetch(baseUrl, {
      method: "POST",
      body: JSON.stringify(note),
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((res => res.json()))
    .then(this.fetchNotes)
  }

  cancelEdit = () => {
    this.state.edit ? this.setState({edit: false}) : this.setState({edit: true})
  }

  selectedNote = (note) => {
    this.setState({
      note: note
    })
  }

  searchTerm = (searchTerm) => {
    this.setState({
      searchTerm: searchTerm
    })
  }

  render() {  
    return (   
      <Fragment>
        <Search searchTerm={this.searchTerm}/>
        <div className='container'>
          <Sidebar 
          notes={this.state.notes} 
          selectedNote={this.selectedNote}
          cancelEdit={this.cancelEdit}
          edit={this.state.edit}
          createNote={this.createNote}
          searchTerm={this.state.searchTerm} />
          
          <Content 
          note={this.state.note} 
          updateNote={this.updateNote}
          cancelEdit={this.cancelEdit}
          edit={this.state.edit} />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
