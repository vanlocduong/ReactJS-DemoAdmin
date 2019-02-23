import React, { Component } from 'react';
import './../App.css';
import Header from './Header.js'
import Search from './Search.js'
import TableData from './TableData.js'
import AppUser from './AppUser.js'
import Data from './Data.json'

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hienThiForm : true,
        dataUserProps: Data,
        searchText : ''
      }
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
                checkConnectionSearch={(giaTriText) => this.getTextSearch(giaTriText)} 
              ketNoi={() => this.doiTrangThai()} hienThiForm={this.state.hienThiForm}/>
              <TableData dataUserProps={this.state.dataUserProps}/>
              <AppUser hienThiForm={this.state.hienThiForm}/>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
