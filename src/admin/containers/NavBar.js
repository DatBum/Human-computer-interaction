import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
		<div className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
			<a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">SDD Pharmacy Admin</a>
			<input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
			<ul className="navbar-nav px-3">
				<li className="nav-item text-nowrap">
					<a className="nav-link" href="#">Sign out</a>
				</li>
			</ul>
    	</div>
    );
  }
}

export default NavBar;
