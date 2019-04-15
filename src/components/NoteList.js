import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  const renderNotes = () => {
    return props.notes.map(note => {
      return (<NoteItem 
        key={note.id} 
        note={note} 
        selectedNote={props.selectedNote}
        cancelEdit={props.cancelEdit}
        edit={props.edit}/>)
    })
  }
  return (  
    <ul>
      {renderNotes()}
    </ul>
  );
  
}

export default NoteList;
