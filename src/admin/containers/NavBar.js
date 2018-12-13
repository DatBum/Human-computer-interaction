import React, { Component, Fragment } from 'react';

class NavBar extends Component {
  render() {
    return (
		<Fragment >
			<nav className="navbar navbar-inverse navbar-fixed-top">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar" />
							<span className="icon-bar" />
							<span className="icon-bar" />
						</button>
						<a className="navbar-brand" href="#">Pharmacy Admin</a>
					</div>
					<div id="navbar" className="navbar-collapse collapse">
						<ul className="nav navbar-nav navbar-right">
							<li><a href="#">Dashboard</a></li>
							<li><a href="#">Settings</a></li>
							<li><a href="#">Profile</a></li>
							<li><a href="#">Help</a></li>
						</ul>
					</div>
				</div>
			</nav>
		</Fragment>
    );
  }
}

export default NavBar;
