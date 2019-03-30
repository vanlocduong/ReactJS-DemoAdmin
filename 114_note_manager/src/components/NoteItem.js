import React, { Component } from 'react'
import { connect } from 'react-redux';

class NoteItem extends Component { 
    // implement two action 
    twoActionButtn = () => {
        this.props.changEditStatus(); // action 1 change status edit to show form input 
        //action 2 take content from store , and updata data to store 
        console.log('data ', this.props.note);
        this.props.getEditData(this.props.note);
        
    }
  render() {
    return (
      <div>
            <div className="card">
                <div className="card-header" role="tab" id="note1">
                    <h5 className="mb-0">
                        <a
                            data-toggle="collapse"
                            data-parent="#noteList"
                            href={"#number" + this.props.index}
                            aria-expanded="true"
                            aria-controls="noteContent1"
                        >
                            {this.props.noteTitle}
                        </a>
                        <div className=" btn-group float-right">
                            <button className="btn btn-outline-info" onClick={() => this.twoActionButtn()}> Sửa </button>
                            <button className = "btn btn-outline-secondary">Xóa </button>
                        </div>
                    </h5>
                </div>
                <div
                    id={"number" + this.props.index}
                    className="collapse in"
                    role="tabpanel"
                    aria-labelledby="section1HeaderId"
                >
                    <div className="card-body">
                        {this.props.noteContent}
                        </div>
                </div>
            </div>
           
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isEdit: state.isEdit
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changEditStatus: () => {
            dispatch({type : 'CHANGE_EDIT_STATUS'});
        },
        getEditData: (editObject) => {
            dispatch({ 
                type: 'GET_EDIT_DATA',
                editObject 
            });
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteItem)

