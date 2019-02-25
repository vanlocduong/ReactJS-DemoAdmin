import React, { Component } from 'react';
import './../App.css';
import Header from './Header.js'
import Search from './Search.js'
import TableData from './TableData.js'
import AppUser from './AppUser.js'
import Data from './Data.json'
const uuidv1 = require('uuid/v1');

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hienThiForm : true,
        dataUserProps: Data,
        searchText : '',
        id: "",
        name: "",
        tel: "",
        permisssion: "",
        editUserStatus: true,
        userEditObject: {}
      }
    }
    
  isChangeEditUserStatus = () => {
    this.setState({
      editUserStatus : !this.state.editUserStatus
    })
  }

  doiTrangThai =()=>{
    this.setState({
      hienThiForm: !this.state.hienThiForm,
      datauser : Data
    });
  }

  getTextSearch =(giaTriText)=>{
    this.setState({
      searchText: giaTriText
    })
    
  }

  addNewUser = (name,tel,permisson) => {
    alert(" ket noi thanh cong ");
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.permisson = permisson;
    var items = this.state.dataUserProps;
    items.push(item);

    this.setState({
      dataUserProps : items
    })
    console.log(items);
  };

  editFunLuuDuLieuNhanVe = (user) => {
    this.setState({
      userEditObject: user 
    });
    console.log(user);
    
  }

  getUserEditInfoApp = (info)=>{
    console.log("thong tin da sua xong " + info.name);
    
  }

  render() {
    // console.log(this.state.dataUserProps)
    var ketqua = [];
    this.state.dataUserProps.forEach((element) => {
      if (element.name.indexOf(this.state.searchText) !== -1){
        ketqua.push(element);
      }
    });
    console.log(ketqua);
    return (
      <div>
        <Header />
        <div className="serchForm">
          <div className="container">
            <div className="row">
              <Search
                getUserEditInfoApp={(info) => this.getUserEditInfoApp(info)}
                userEditObject={this.state.userEditObject}
                checkConnectionSearch={(giaTriText) => this.getTextSearch(giaTriText)} 
              ketNoi={() => this.doiTrangThai()} hienThiForm={this.state.hienThiForm}
                editUserStatus={this.state.editUserStatus}
                changeEditUserStatus={() => this.isChangeEditUserStatus()}
                
              />
              <TableData
                changeEditUserStatus={() => this.isChangeEditUserStatus()}
               editFun={ (user)=>this.editFunLuuDuLieuNhanVe(user)} dataUserProps={ketqua}/>
              <AppUser add = { (name,tel, permisson)=> this.addNewUser(name,tel,permisson)}  hienThiForm={this.state.hienThiForm}/>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
