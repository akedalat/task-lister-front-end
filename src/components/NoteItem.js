import React from 'react';

const NoteList = (props) => {


const handleClick = () => {
 props.selectedNote(props.note)
 
}
  return (
  <li onClick={handleClick}>
    <h2>{props.note.title}</h2>
    <p>{props.note.body.slice(0, 15)} ...</p>
  </li>
  )
}
export default NoteList;
