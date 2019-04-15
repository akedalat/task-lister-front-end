import React from 'react';


const NoteList = (props) => {


const handleClick = () => {
 props.selectedNote(props.note)
 // discard edit by changing edit to false
  if (props.edit){
    props.cancelEdit()
  }
}

if (props.note.body){
  return (
  <li onClick={handleClick}>
    <h2>{props.note.title}</h2>
    <p>{props.note.body.slice(0,15)} ...</p>
  </li>
    )
  }
  else {
    return (
    <li>
    <img className="loading" src="loading.gif" alt="loading"/>
    </li>
    )
  }
}

export default NoteList;
