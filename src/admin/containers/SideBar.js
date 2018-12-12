import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SideBarActions from '../actions/SideBarActions';

class SideBar extends Component {

  handleSideBar = (e) =>{
  	const sectionTitle = e.target.text;
  	this.props.actions.clickSideBar(sectionTitle);
  }

	render() {
		return (
			<div>
				{/*SIDEBAR*/}
				<nav className="col-md-2 d-none d-md-block bg-light sidebar">
					<div className="sidebar-sticky">
						<h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
						    <span>Danh mục</span>
						    <a className="d-flex align-items-center text-muted" href="#">
						      <span data-feather="plus-circle" />
						    </a>
						</h6>
						<ul className="nav flex-column ">
						    <li className="nav-item">
						      <a className="nav-link active" onClick={this.handleSideBar} href="#">
						        Khách Hàng
						      </a>
						    </li>
						    <li className="nav-item">
						      <a className="nav-link" onClick={this.handleSideBar} href="#">
						        Nhóm đối tác, nhà cung cấp
						      </a>
						    </li>
						    <li className="nav-item">
						      <a className="nav-link " onClick={this.handleSideBar} href="#">
						        Orders
						      </a>
						    </li>
						    <li className="nav-item">
						      <a className="nav-link" onClick={this.handleSideBar} href="#">
						        Sản phẩm
						      </a>
						    </li>
						</ul>
					</div>
				</nav>
				{/*END SIDEBAR*/}
			</div>
		);
	}
}

function mapStateToProps(state) {
    return {
        sidebar: state.sideBarReducers
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(SideBarActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);