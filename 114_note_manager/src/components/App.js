import React, { Component } from 'react';
import './App.css';
import { noteData } from './firebaseConnect.js';
import * as firebase from 'firebase'
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

class App extends Component {
  render() {
    console.log("nodata ", noteData);
    return (
      <div>
        <Nav/>
        <div class="container">
          <div class="row">
            <NoteList/>
            <NoteForm/>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
