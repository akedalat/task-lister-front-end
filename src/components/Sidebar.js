import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {

    state = {
      sort: ""
    }

  handleChange = (e) => {
    this.setState({
      sort: e.target.value
    })
  }

  handleClick = () => {
    const createdNote = {
      title: "Your Task Title",
      body: "Description",
      user_id: 2
    }
    this.props.createNote(createdNote)
  }

  // setSort= () => {
  //   console.log(this.notes)
  // }  

  render(){
    if (this.state.sort === "alphabetical"){
      this.props.notes.sort((a,b)=> {
        if (a.title.toLowerCase() < b.title.toLowerCase()){return -1}
        if (a.title.toLowerCase() > b.title.toLowerCase()){return 1}
        return 0
        })
      }
      else if (this.state.sort === "created"){
        this.props.notes.sort((a,b)=> {
          if (a.created_at < b.created_at) {return -1}
          if (a.created_at > b.created_at) {return 1}
          return 0
          })
        }
        else if (this.state.sort === "updated"){
          this.props.notes.sort((a,b)=> {
            if (a.updated_at < b.updated_at) {return -1}
            if (a.updated_at > b.updated_at) {return 1}
            return 0
            })
          }

    console.log(this.props.notes)
    return (
      <div className='master-detail-element sidebar'>
      sort tasks
      <select onChange={this.handleChange} className="sort">
        <option value="created">Date Created</option>
        <option value="updated">Date Updated</option>
        <option value="alphabetical">Alphabetical</option>
      </select>
        <NoteList 
        notes={this.props.notes} 
        selectedNote={this.props.selectedNote}
        cancelEdit={this.props.cancelEdit}
        edit={this.props.edit}
        searchTerm={this.props.searchTerm}
        sort={this.handleSort}/>

        <button onClick={this.handleClick}>New</button>
      </div>
    );
  }
}

export default Sidebar;
