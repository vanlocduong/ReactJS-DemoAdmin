import React, { Component } from 'react'

export default class TableData extends Component {
  render() {
    return (
        <div className="col-9">
            <table className="table table-striped table-inverse table-hover">
                <thead className="thead-inverse">
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Điện Thoại</th>
                        <th>Quyền</th>
                        <th>Thao Tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td >1</td>
                        <td>Dương Văn Lộc</td>
                        <td>0252122551</td>
                        <td>Develop</td>
                        <td>
                            <div className="btn-group">
                                <div className="btn btn-warning sua"> <i className="fa fa-edit    " />Sửa</div>
                                <div className="btn btn-danger xoa"> <i className="fa fa-delete    " />Xóa</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td >1</td>
                        <td>Dương Văn Lộc</td>
                        <td>0252122551</td>
                        <td>Develop</td>
                        <td>
                            <div className="btn-group">
                                <div className="btn btn-warning sua"> <i className="fa fa-edit    " />Sửa</div>
                                <div className="btn btn-danger xoa"> <i className="fa fa-delete    " />Xóa</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td >1</td>
                        <td>Dương Văn Lộc</td>
                        <td>0252122551</td>
                        <td>Develop</td>
                        <td>
                            <div className="btn-group">
                                <div className="btn btn-warning sua"> <i className="fa fa-edit    " />Sửa</div>
                                <div className="btn btn-danger xoa"> <i className="fa fa-delete    " />Xóa</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td >1</td>
                        <td>Dương Văn Lộc</td>
                        <td>0252122551</td>
                        <td>Develop</td>
                        <td>
                            <div className="btn-group">
                                <div className="btn btn-warning sua"> <i className="fa fa-edit    " />Sửa</div>
                                <div className="btn btn-danger xoa"> <i className="fa fa-delete    " />Xóa</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td >1</td>
                        <td>Dương Văn Lộc</td>
                        <td>0252122551</td>
                        <td>Develop</td>
                        <td>
                            <div className="btn-group">
                                <div className="btn btn-warning sua"> <i className="fa fa-edit    " />Sửa</div>
                                <div className="btn btn-danger xoa"> <i className="fa fa-delete    " />Xóa</div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
  }
}
