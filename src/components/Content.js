import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

class Content extends Component {

  state = {
    edit: false
  }

  editOrCancelBtnClicked = () => {
    this.state.edit ? this.setState({edit: false}) : this.setState({edit: true})
  }

  renderContent = () => {
    if (this.state.edit) {
      return <NoteEditor 
      note={this.props.note}
      editOrCancelBtnClicked={this.editOrCancelBtnClicked}
      updateNote={this.props.updateNote}
      />;
    } else if (Object.keys(this.props.note).length > 0) {
      return <NoteViewer editOrCancelBtnClicked={this.editOrCancelBtnClicked} note={this.props.note}/>;
    } else {
      return <Instructions />;
    }
  }

  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
