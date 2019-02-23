import React, { Component } from 'react'

export default class componentName extends Component {
  setPermisson = () => {
    if(this.props.permisssion === 1){
      return "Sát Thủ";
    }else if (this.props.permisssion === 2){
      return "Xạ Thủ";
    }else {
      return "Pháp Sư";
    }
  }

  render() {
    return (
      
            <tr>
                <td >{this.props.stt}</td>
                <td>{this.props.username}</td>
                <td>{this.props.sodt}</td>
                <td>{this.setPermisson()}</td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-warning sua"> <i className="fa fa-edit    " />Sửa</div>
                        <div className="btn btn-danger xoa"> <i className="fa fa-delete    " />Xóa</div>
                    </div>
                </td>
            </tr>
    
    )
  }
}
