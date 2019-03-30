import React, { Component } from 'react'
import { connect } from 'react-redux';

class NoteForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			noteTitle: '',
			noteContent: '',
			id: '',
		};
	}
	
	isChange = (event) => {
		const name  = event.target.name ;
		const value = event.target.value;
		
		this.setState({
				[name] : value, 
		})
	}

	addData = (title, content) => {
		if(this.state.id){
			var editObject = {};
			editObject.id = this.state.id;
			editObject.noteContent = this.state.noteContent;
			editObject.noteTitle = this.state.noteTitle;

			//console.log('du lieu dan sua la ', editObject);
			this.props.editDataStore(editObject);
			this.props.changEditStatus();
			
		}else{
			var item = {};
			item.noteTitle = title;
			item.noteContent = content;

			// this.props.getData(item);
			// alert('Them du lieu '+ JSON.stringify(item) + 'thanh cong ');
			// item = JSON.stringify(item);
			// console.log('item ', item)
			this.props.addDataStore(item);
		}
		
		
	}
	componentWillMount() {
	//	console.log('note loc', this.props.editItem.noteContent);
		
	  if(this.props.editItem){
		this.setState({
			id: this.props.editItem.id,
			noteTitle: this.props.editItem.noteTitle,
			noteContent: this.props.editItem.noteContent,
		});
	  }
	}
	

  render() {
		console.log('loc ', this.props.editItem);
		
    return (
		<div className="col-4">
			<h3>Sua Noi Dung Text</h3>
			<form>
			<div className="form-group">
				<label htmlFor="noteTitle">Tiêu Đề Note </label>
				<input
				defaultValue ={this.props.editItem.noteTitle}
					onChange={(event) => this.isChange(event)}
					type="text"
					className="form-control"
					name="noteTitle"
					id="noteTitle"
					aria-describedby="helpNoteId"
					placeholder="Tiêu Đề Note "
				/>
				<small id="helpNoteId" className="form-text text-muted">
					Điền Title vào đây{' '}
				</small>
			</div>
			<div className="form-group">
				<label htmlFor="noteTitle">Nội Dung Note </label>
				<textarea
					onChange={(event) => this.isChange(event)}
					type="text"
					className="form-control"
					name="noteContent"
					id="noteContent"
					aria-describedby="helpNoteId"
					placeholder="Nội Dung  Note "
					defaultValue={this.props.editItem.noteContent}
				/>
				<small id="helpNoteId" className="form-text text-muted">
					Điền Title vào đây{' '}
				</small>
			</div>
					<button type="reset" onClick={() => this.addData(this.state.noteTitle, this.state.noteContent)} className="btn btn-primary btn-block">
				Lưu
			</button>
			</form>
		</div>
	);
  }
}
const mapStateToProps = (state, ownProps) => {
	return {
		editItem: state.editItem,
	};
}
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		addDataStore: (getItem) => {
			dispatch({ type: 'ADD_DATA' , getItem})
		},
		editDataStore: (getItem) => {
			dispatch({ type: 'EDIT', getItem })
		},
		changEditStatus: () => {
			dispatch({ type: 'CHANGE_EDIT_STATUS' });
		},
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
