import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-3">Quản lý giao diện admin </h1>
                    <p className="lead">Với dữ liệu json </p>
                    <hr className="my-2" />
                    <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
                    <p />
                </div>
            </div>
      </div>
    )
  }
}
