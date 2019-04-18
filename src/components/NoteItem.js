import React from 'react';
import { Button } from 'semantic-ui-react'

const NoteList = (props) => {

const handleClick = () => {
 props.selectedNote(props.note)
 // discard edit by changing edit to false
  if (props.edit){
    props.cancelEdit()
  }
}

const handleDelete = () => {
  props.deleteNote(props.note.id)
}

if (props.note.body){
  return (
    <React.Fragment>
  <li onClick={handleClick}>
    <h2>{props.note.title}</h2>
    <p>{props.note.body.slice(0, 15)} ...</p>
  </li>
  <button onClick={handleDelete} class="ui red basic button">Delete</button>
  </React.Fragment>
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
