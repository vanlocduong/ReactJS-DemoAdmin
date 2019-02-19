import React, { Component } from 'react';
import './../App.css';
import Header from './Header.js'
import Search from './Search.js'
import TableData from './TableData.js'
import AppUser from './AppUser.js'

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hienThiForm : true
      }
    }
    

  doiTrangThai =()=>{
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  }
  render() {
    return (
      <div>
        <Header />
        <div className="serchForm">
          <div className="container">
            <div className="row">
              <Search ketNoi={() => this.doiTrangThai()}/>
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
