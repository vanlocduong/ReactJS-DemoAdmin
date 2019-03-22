import React, { Component } from 'react'

export default class NoteForm extends Component {
  render() {
    return (
      <div>
            <div className="col-4">
                <h3>Sua Noi Dung Text</h3>
                <div className="form-group">
                    <label htmlFor="noteTitle">Tiêu Đề Note </label>
                    <input type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpNoteId" placeholder="Tiêu Đề Note " />
                    <small id="helpNoteId" className="form-text text-muted">Điền Title vào đây </small>
                </div>
                <div className="form-group">
                    <label htmlFor="noteTitle">Nội Dung Note </label>
                    <textarea type="text" className="form-control" name="noteContent" id="noteContent" aria-describedby="helpNoteId" placeholder="Nội Dung  Note " defaultValue={"                        "} />
                    <small id="helpNoteId" className="form-text text-muted">Điền Title vào đây </small>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Lưu</button>
            </div>
      </div>
    )
  }
}
