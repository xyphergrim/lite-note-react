import React, { Component } from 'react';
import Textarea from './Textarea';
import NoteBtn from './NoteBtn';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      noteCount: 0
    }
  }

  onAddNote = () => {
    //this.setState({notes: this.state.notes + 1});
    this.setState({noteCount: this.state.noteCount + 1});
  }

  render() {
    var notes = [];
    for (var i = 0; i < this.state.noteCount; i++) {
      notes.push(i);
    }

    return (
      <div>
        <NoteBtn onAddNote={this.onAddNote} />
        {
          notes.map((note, i) => {
            console.log(note);
            return(
              <Textarea />
            );
          })
        }
      </div>
    );
  }
}

export default App;
