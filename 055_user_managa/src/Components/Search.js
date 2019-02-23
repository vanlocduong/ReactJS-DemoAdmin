import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state ={
            tempValue: ''
        }
    }
    

    isChangeSearch =(valueChange)=>{
        console.log(valueChange.target.value)
        this.setState({
            tempValue : valueChange.target.value
        })
    }

    hienThiNut=()=>{
        if (this.props.hienThiForm===true){
            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.ketNoi()}> Đóng Lại </div>;
        }else{
            
            return <div className="btn btn-block btn-outline-info" onClick={() => this.props.ketNoi()}> Thêm Mới </div>;
        }
    }
  render() {
    return (
        <div>
        <div className="col-12">
            <div className="form-group">
                <div className="btn-group">
                    <input type="text" className="form-control" style={{ width: '600px' }} 
                     placeholder="Nhập từ khóa" onChange={(valueChange)=>this.isChangeSearch(valueChange)}/>
                        <div className="btn btn-info" onClick={(dl)=>this.props.checkConnectionSearch(this.state.tempValue)}> Tìm </div>
                </div>
            </div>
                <div className="btn-group1">
                    {this.hienThiNut()}
                    
                </div>
            <hr/>
        </div>
        </div>
    )
  }
}
