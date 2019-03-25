import { noteData } from './firebaseConnect';
import { connect } from 'react-redux'

var redux = require('redux');


const noteinitialState = {
    testConnectStore : 'connect',
}

const allReducer = (state = noteinitialState, action) => {
  switch (action.type) {

    case "ADD_DATA":
          noteData.push(action.getItem);
          console.log(" them thanh cong bien nhan vao la ", JSON.stringify(action.getItem));
        return state;

    default:
        return state
  }
}

var store = redux.createStore(allReducer);
export default store;

