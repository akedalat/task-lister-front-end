import React, { Component } from 'react';
import NoteList from './NoteList';
import {Menu, Dropdown } from 'semantic-ui-react'

class Sidebar extends Component {

    state = {
      sort: ""
    }

  handleClick = () => {
    const createdNote = {
      title: "Your Task Title",
      body: "Description",
      user_id: this.props.currentUser.id
    }
    this.props.createNote(createdNote)
  } 
  
  options = [
    { key: 1, text: 'Alphabetical', value: "alphabetical" },
    { key: 2, text: 'Date Created', value: "created" },
    { key: 3, text: 'Date Updated', value: "updated" },
  ]

  handleDropDown = (a,b) => {
    this.setState({
      sort: b.value
    })
  }

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
          if (a.created_at < b.created_at) {return 1}
          if (a.created_at > b.created_at) {return -1}
          return 0
          })
        }
        else if (this.state.sort === "updated"){
          this.props.notes.sort((a,b)=> {
            if (a.updated_at < b.updated_at) {return 1}
            if (a.updated_at > b.updated_at) {return -1}
            return 0
            })
          }

    return (
      <div className='master-detail-element sidebar'>
      <div className="dropdown">
      <Menu compact>
        <Dropdown onChange={this.handleDropDown} text='Sort Tasks' options={this.options} simple item />
      </Menu>
      </div>
        <NoteList 
        notes={this.props.notes} 
        selectedNote={this.props.selectedNote}
        cancelEdit={this.props.cancelEdit}
        edit={this.props.edit}
        searchTerm={this.props.searchTerm}
        sort={this.handleSort}
        deleteNote={this.props.deleteNote}/>

        <button onClick={this.handleClick}>New</button>
      </div>
    );
  }
}

export default Sidebar;
