import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

const notesUrl = "http://localhost:3000/api/v1/notes"
const usersUrl = "http://localhost:3000/api/v1/users"


class NoteContainer extends Component {

  state = {
    notes: [],
    note: {},
    edit: false,
    searchTerm: ""
  }

  //To Rerender Notes when updateNote or createNote are invoked
  fetchNotes = () => {
    fetch(usersUrl)
    .then(resp => resp.json())
    .then(data => this.setState({
        notes: data.find(user => {return user.id === this.props.currentUser.id}).notes
      })
    )
  }
  
  // Get Notes
  componentDidMount = () => {
    this.fetchNotes()
  }

  // Update Note
  updateNote = (note, note_id) => {
    fetch(notesUrl + `/${note_id}`, {
      method: "PATCH",
      body: JSON.stringify(note),
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(this.fetchNotes)
  }

  //Create Note
  createNote = (note) => {
    fetch(notesUrl, {
      method: "POST",
      body: JSON.stringify(note),
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((res => res.json()))
    .then(this.fetchNotes)
  }

    //Delete Note
    deleteNote = (id) => {
      fetch(notesUrl + '/' + id, {
        method: 'DELETE'
      })
      .then(response => response.json())
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
          currentUser={this.props.currentUser}
          notes={this.state.notes} 
          selectedNote={this.selectedNote}
          cancelEdit={this.cancelEdit}
          edit={this.state.edit}
          createNote={this.createNote}
          searchTerm={this.state.searchTerm} 
          deleteNote={this.deleteNote}/>
          
          <Content 
          currentUser={this.props.currentUser}
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
