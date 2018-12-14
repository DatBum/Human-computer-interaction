import React, { Component } from 'react';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>  
                           
                        { this.showContentMenus(routes) }
            </Router>
        );
    }
    
    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0 ){
            result = routes.map((route, index) => {
                return (
                    <Route 
                        key = {index}
                        path = {route.path}
                        exact = {route.exact}
                        component = {route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>
    }
}

export default App;
