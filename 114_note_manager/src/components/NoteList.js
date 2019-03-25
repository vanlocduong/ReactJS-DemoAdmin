import React, { Component } from 'react'
import NoteItem from './NoteItem';
import { noteData } from './firebaseConnect';

export default class NoteList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataFirebase: []
    
        }    
    }
    // take data before rendering will user componentWillMount
    componentWillMount(){
    // take data from firebase 
    noteData.on('value', (notes) => {

        var arrayData = [];
        notes.forEach(element => {
            const key = element.key;
            const noteTitle = element.val().noteTitle;
            const noteContent = element.val().noteContent;
            arrayData.push({
                id: key,
                noteTitle: noteTitle,
                noteContent: noteContent

            })
        });
        // put the data into the state to get the print to the screen
        this.setState({
            dataFirebase: arrayData,
        })

        // console.log('array ', arrayData);
    })
    }
    getData =() => {
        console.log('datafirebase ', this.state.dataFirebase);
    }

  render() {



    return (
		
        <div className="col">
            <div id="noteList" role="tablist" aria-multiselectable="true">
            {
                this.getData()
            
            }
                <NoteItem/>
                
            </div>
        </div>
        
			
	);
  }
}
