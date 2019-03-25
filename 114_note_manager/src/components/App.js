import React, { Component } from 'react';
import './App.css';
import { noteData } from './firebaseConnect.js';
import * as firebase from 'firebase'
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

class App extends Component {

// use redux not use react-js pure
  // addData = (item)=>{
  //   noteData.push(item);
  // }
  render() {
    // console.log("nodata ", noteData);
    // noteData.once('value').then(function(snapshot){
    //   console.log(snapshot.val());
    // });

    return (
      <div>
        <Nav/>
        <div class="container">
          <div class="row">
            <NoteList/>
            <NoteForm getData={(item) => this.addData(item) }/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
