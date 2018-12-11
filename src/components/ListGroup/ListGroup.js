import React, { Component, Fragment} from 'react';

class ListGroup extends Component {
    render() {
        return (
        	<Fragment>
	            <aside className="col-sm-3 hidden-xs" id="column-left">
	                <div className="list-group">
	                    <a className="list-group-item" href="#">
	                        Login
	                    </a>
	                    <a className="list-group-item" href="/register">
	                        Register
	                    </a>
	                    <a className="list-group-item" href="#">
	                        Forgotten Password
	                    </a>
	                    <a className="list-group-item" href="#">
	                        My Account
	                    </a>
	                    <a className="list-group-item" href="#">
	                        Address Book
	                    </a>
	                    <a className="list-group-item" href="#">
	                        Wish List
	                    </a>
	                    <a className="list-group-item" href="#">
	                        Order History
	                    </a>
	                    <a className="list-group-item" href="#">
	                        Downloads
	                    </a>
	                    <a className="list-group-item" href="#">
	                        Recurring payments
	                    </a>
	                    <a className="list-group-item" href="#">
	                        Reward Points
	                    </a>
	                    <a className="list-group-item" href="#">
	                        Returns
	                    </a>
	                    <a className="list-group-item" href="#">
	                        Transactions
	                    </a>
	                    <a className="list-group-item" href="#">
	                        Newsletter
	                    </a>
	                </div>
	            </aside>
            </Fragment>
        );
    }
}

export default ListGroup;