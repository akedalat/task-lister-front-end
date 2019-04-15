import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  const renderNotes = () => {
    return props.notes.map((note, index) => {
      if (note.title.toLowerCase().includes(props.searchTerm) 
      || note.body.toLowerCase().includes(props.searchTerm)){
      return (<NoteItem 
        key={index} 
        note={note} 
        selectedNote={props.selectedNote}
        cancelEdit={props.cancelEdit}
        edit={props.edit}/>)
      }
    })
  }
  return (  
    <ul>
      {renderNotes()}
    </ul>
  );  
}

export default NoteList;
