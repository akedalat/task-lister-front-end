import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {
    return (
      <div className='master-detail-element sidebar'>
      <button>New</button>
      <br></br><br></br>
        <NoteList notes={this.props.notes} selectedNote={this.props.selectedNote}/>
      </div>
    );
  }
}

export default Sidebar;
