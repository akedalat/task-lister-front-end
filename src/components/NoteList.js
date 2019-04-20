import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  const renderNotes = () => {
    return props.notes.map((note, index) => {
      if (note.title.toLowerCase().includes(props.searchTerm.toLowerCase()) 
      || note.body.toLowerCase().includes(props.searchTerm.toLowerCase())){
      return (<NoteItem 
        key={index} 
        note={note} 
        selectedNote={props.selectedNote}
        cancelEdit={props.cancelEdit}
        edit={props.edit}
        deleteNote={props.deleteNote}/>)
        
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
