import { noteData } from './firebaseConnect';
import { connect } from 'react-redux'

var redux = require('redux');


const noteinitialState = {

}

const allReducer = (state = noteinitialState, action) => {
  switch (action.type) {

    case "ADD_DATA":
        return { ...state }

    default:
        return state
  }
}

var store = redux.createStore(allReducer);
export default store;

