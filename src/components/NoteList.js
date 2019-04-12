import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  const renderNotes = () => {
    return props.notes.slice(1).map(note => {
      return (<NoteItem key={note.id} note={note}/>)
    })
  }
  return (
    
    <ul>
      {renderNotes()}
    </ul>
  );
}

export default NoteList;
