import React, { Component } from 'react'

export default class NoteList extends Component {
  render() {
    return (
        <div id="noteList" role="tablist" aria-multiselectable="true">
            <div className="card">
                <div className="card-header" role="tab" id="note1">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#noteList" href="#noteContent1" aria-expanded="true" aria-controls="noteContent1">
                            Ghi Chú 21/03/2019
              </a>
                    </h5>
                </div>
                <div id="noteContent1" className="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
                    <div className="card-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, cupiditate earum.
                        Nostrum, obcaecati, eaque doloribus officiis ea accusamus
                        cumque adipisci quos quaerat recusandae quo minus consectetur perspiciatis suscipit labore odit.
            </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" role="tab" id="note2">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#noteList" href="#noteContent2" aria-expanded="true" aria-controls="noteContent2">
                            Ghi Chú 21/03/2019 2
              </a>
                    </h5>
                </div>
                <div id="noteContent2" className="collapse in" role="tabpanel" aria-labelledby="section2HeaderId">
                    <div className="card-body">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore aliquam officiis ducimus rerum quidem saepe ipsum ullam corporis
                        velit recusandae sunt facere dolore dolor repellendus voluptatum, a dolorem fugiat laboriosam!
            </div>
                </div>
            </div>
        </div>
    )
  }
}
