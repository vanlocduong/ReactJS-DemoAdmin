import React, { Component } from 'react'

export default class NoteForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			noteTitle: '',
			noteContent: '',
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
		var item = {};
		item.noteTitle = title;
		item.noteContent = content;
		this.props.getData(item);
		alert('Them du lieu '+ JSON.stringify(item) + 'thanh cong ');
	}

  render() {
		
    return (
		<div className="col-4">
			<h3>Sua Noi Dung Text</h3>
			<form>
			<div className="form-group">
				<label htmlFor="noteTitle">Tiêu Đề Note </label>
				<input
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
					defaultValue={''}
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
