import React, { Fragment } from 'react';

const NoteViewer = (props) => {

  const handleClick= () => {
    props.cancelEdit()
  }
  console.log(props.note.title)
  return (
    <Fragment>
      <h2>{props.note.title}</h2>
      <p>{props.note.body}</p>
      <button onClick={handleClick}>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
