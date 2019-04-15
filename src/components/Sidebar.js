import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {

  handleClick = () => {
    const createdNote = {
      title: "Your Task Title",
      body: "Description",
      user_id: 2
    }
    this.props.createNote(createdNote)
  }

  render() {
    return (
      <div className='master-detail-element sidebar'>
        <NoteList 
        notes={this.props.notes} 
        selectedNote={this.props.selectedNote}
        cancelEdit={this.props.cancelEdit}
        edit={this.props.edit}/>
        <button onClick={this.handleClick}>New</button>
      </div>
    );
  }
}

export default Sidebar;
