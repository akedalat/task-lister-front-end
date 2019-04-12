import React from 'react';

const NoteList = (props) => {

  return (
  <li>
    <h2>{props.note.title}</h2>
    <p>{props.note.body.slice(0, 15)} ...</p>
  </li>
  )
}
export default NoteList;
