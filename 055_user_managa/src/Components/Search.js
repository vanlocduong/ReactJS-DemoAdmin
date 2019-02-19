import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
        <div>
        <div className="col-12">
            <div className="form-group">
                <div className="btn-group">
                    <input type="text" className="form-control" style={{ width: '600px' }}  placeholder="Nhập từ khóa" />
                    <div className="btn btn-info"> Tìm </div>
                </div>
            </div>
                <div className="btn-group1">
                    <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.ketNoi()}> Đóng Lại </div>
                    return <div className="btn btn-block btn-outline-info" onClick={() => this.props.ketNoi()}> Thêm Mới </div>;
                </div>
            <hr/>
        </div>
        </div>
    )
  }
}
