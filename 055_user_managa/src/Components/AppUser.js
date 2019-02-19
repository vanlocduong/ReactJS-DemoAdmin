import React, { Component } from 'react'

export default class AppUser extends Component {
    hienThiForm =()=>{
      if (this.props.hienThiForm === true) {
        return (
          <div className="card boder-primary mb-3 mt-2">
            <div className="card-header">Thêm mới User vào hệ thống</div>
            <div className="card-body text-primary">
              <div className="form-group">
                <label >Tên User</label>
                <input type="text" className="form-control" placeholder="user name" aria-describedby="helpId" />
              </div>
              <div className="form-group">
                <label >Điện Thoại</label>
                <input type="text" className="form-control" placeholder="so dien thoai" aria-describedby="helpId" />
              </div>
              <div className="form-group" required>
                <label >Text</label>
                <select id="my-input" className="custom-select">
                  <option value>Chọn Quyền Mặc Định</option>
                  <option value={2}>admin</option>
                  <option value={3}>khách</option>
                  <option value={4}>client</option>
                </select>
              </div>
              <div className="form-group">
                <div className="btn btn-block btn-primary">Thêm Mới</div>
              </div>
            </div>
          </div>
        );
      }
    }

  render() {
    return (
      <div className="col-3">
        <div >
          {this.hienThiForm() }
          
        </div>
      </div>
    )
  }
}
