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
        hienThiForm : true
      }
    }
    

  doiTrangThai =()=>{
    this.setState({
      hienThiForm: !this.state.hienThiForm,
      datauser : Data
    });
  }
  render() {
    console.log(this.state.datauser)
    return (
      <div>
        <Header />
        <div className="serchForm">
          <div className="container">
            <div className="row">
              <Search ketNoi={() => this.doiTrangThai()} hienThiForm={this.state.hienThiForm}/>
              <TableData />
              <AppUser hienThiForm={this.state.hienThiForm}/>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
