import React, { Component, Fragment } from 'react';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Search from './components/Search/Search';

class App extends Component {
    render() {
        return (
            <Router>  
                <Fragment>
                    <Header />  
                    <Search />            
                        { this.showContentMenus(routes) }
                    <Footer /> 
                </Fragment>
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
