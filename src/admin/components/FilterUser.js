import React, { Component, Fragment } from 'react';

export default class FilterUser extends Component {

  render() {
    return (
      <div class="row align-items-center justify-content-center">
                      <div class="col-md-2 pt-3">
                           <div class="form-group ">
                              <select id="inputState " class="form-control">
                                <option selected>Brand</option>
                                <option>BMW</option>
                                <option>Audi</option>
                                <option>Maruti</option>
                                <option>Tesla</option>
                              </select>
                           </div>
                        </div>
                    <div class="col-md-2 pt-3">
                           <div class="form-group">
                              <select id="inputState" class="form-control">
                                <option selected>Model</option>
                                <option>BMW</option>
                                <option>Audi</option>
                                <option>Maruti</option>
                                <option>Tesla</option>
                              </select>
                           </div>
                        </div>
                        <div class="col-md-2 pt-3">
                            <div class="form-group">
                              <select id="inputState" class="form-control">
                                <option selected>Budget</option>
                                <option>BMW</option>
                                <option>Audi</option>
                                <option>Maruti</option>
                                <option>Tesla</option>
                              </select>
                            </div>
                        </div>
                        <div class="col-md-2 pt-3">
                            <div class="form-group">
                              <select id="inputState" class="form-control">
                                <option selected>Type</option>
                                <option>BMW</option>
                                <option>Audi</option>
                                <option>Maruti</option>
                                <option>Tesla</option>
                              </select>
                            </div>
                        </div>
                        <div class="col-md-2">
                         <button type="button" class="btn btn-info"><b>SEARCH</b></button>
                      </div>
                  </div>
    );
  }
}
