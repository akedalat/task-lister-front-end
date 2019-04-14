import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

class Content extends Component {

  renderContent = () => {
    if (this.props.edit) {
      return <NoteEditor 
      note={this.props.note}
      cancelEdit={this.props.cancelEdit}
      updateNote={this.props.updateNote}
      />;
    } else if (Object.keys(this.props.note).length > 0) {
      return <NoteViewer cancelEdit={this.props.cancelEdit} note={this.props.note}/>;
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
