import { noteData } from './firebaseConnect';
import { connect } from 'react-redux'

var redux = require('redux');


const noteinitialState = {
    isEdit : false,
    editItem : {}
}

const allReducer = (state = noteinitialState, action) => {
  switch (action.type) {
		case 'ADD_DATA':
			noteData.push(action.getItem);
			//  console.log(" them thanh cong bien nhan vao la ", JSON.stringify(action.getItem));
			return state;
		case 'CHANGE_EDIT_STATUS':
			return { ...state, isEdit: !state.isEdit };
		case 'GET_EDIT_DATA':
			return { ...state, editItem: action.editObject };
    case 'EDIT':
      console.log(" da vao chinh sua ", JSON.stringify(action.getItem));
			return { ...state, editItem: {} };
		default:
			return state;
  }
}

var store = redux.createStore(allReducer);
store.subscribe(function(){
  console.log(JSON.stringify(store.getState()));
});

export default store;

