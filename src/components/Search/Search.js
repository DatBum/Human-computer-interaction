import React, { Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

class Search extends Component {
	constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

	onChange = (e) => {
        var target = e.target;
        var { value } = target;
        this.setState({
        	text: value
        });
    }

    setCount = () => {
    	localStorage.count = 0;
    }

    render() {
        return (
        	<Fragment>
            	<div className="container">
				    <div className="row" id="search_manu" style={{ marginTop: "10px" }}>
				        <div className="col-md-6 col-xs-12">
				            <form name="quick_find">
				                <div className="form-group">
				                    <div className="input-group">
				                        <input
				                            type="text"
				                            placeholder="Enter search keywords here"
				                            className="form-control input-lg"
				                            id="inputGroup"
				                            onChange={this.onChange}
				                        />
				                        <span className="input-group-addon">
				                            <a 
				                            	href={`/search/${this.state.text}`} 
				                            	style={{ color: "white" }}
				                            	onClick={this.setCount}
			                            	>
				                                Search
				                            </a>
				                        </span>
				                    </div>
				                </div>
				            </form>
				        </div>
				        <div className="col-md-6 col-xs-12">
				            <form name="manufacturers">
				                <div className="form-group">
				                    <div>
				                        <select
				                            style={{
				                                fontSize: "14px",
				                                background: "#EAEAEA",
				                                border: "none"
				                            }}
				                            name="manufacturers_id"
				                            size={1}
				                            className="input-lg form-control arrow-hide date_class"
				                        >
				                            <option value defaultValue="selected">
				                                Please Select manufacturers
				                            </option>
				                            <option>lorem</option>
				                            <option>lorem</option>
				                            <option>lorem</option>
				                            <option>lorem</option>
				                        </select>
				                    </div>
				                </div>
				            </form>
				        </div>
				    </div>
				</div>

            </Fragment>
        );
    }
}

export default Search;