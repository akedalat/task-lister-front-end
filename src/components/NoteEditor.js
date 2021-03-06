import React, { Component } from 'react';

class NoteEditor extends Component {

  state = {
    title: this.props.note.title,
    body: this.props.note.body
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    //e.preventDefault()
    const updatedNote = {
      title: this.state.title,
      body: this.state.body,
      user_id: this.props.currentUser.id
    }
    this.props.updateNote(updatedNote, this.props.note.id)
  }

  handleCancel = () => {
    this.props.cancelEdit()
  }

  render() {
    return (
      <form  onSubmit={this.handleSubmit} className="note-editor">
        <input onChange={this.handleChange} value={this.state.title} type="text" name="title"/>
        <textarea onChange={this.handleChange} value={this.state.body} name="body" /> 
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button onClick={this.handleCancel} type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
