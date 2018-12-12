import React,{Fragment} from 'react';
import HomePage from './pages/HomePage/HomePage';
import CartPage from './pages/CartPage/CartPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ProductPage from './pages/ProductPage/ProductPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage';
import AppAdmin from './admin/components/AppAdmin';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Search from './components/Search/Search';

const routes = [
	{
		path: '/',
		exact: true,
		main: () => 
			<Fragment>
				<Header />  
				<Search /> 
				<HomePage />
				<Footer /> 
			</Fragment>
	},
	{
		path: '/cart',
		exact: false,
		main: () => 
			<Fragment>
				<Header />  
				<Search /> 
				<CartPage />
				<Footer /> 
			</Fragment>
	},
	{
		path: '/checkout',
		exact: false,
		main: () => 
			<Fragment>
				<Header />  
				<Search />
				<CheckoutPage />
				<Footer /> 
			</Fragment>
	},
	{
		path: '/login',
		exact: false,
		main: () => 
			<Fragment>
				<Header />  
				<Search />
				<LoginPage />
				<Footer /> 
			</Fragment>
	},
	{
		path: '/register',
		exact: false,
		main: () => 
			<Fragment>
				<Header />  
				<Search /> 
				<RegisterPage />
				<Footer /> 
			</Fragment>
	},
	{
		path: '/products',
		exact: false,
		main: () => 
			<Fragment>
				<Header />  
				<Search /> 
				<ProductPage />
				<Footer /> 
			</Fragment>
	},
	{
		path: '/product-list',
		exact: false,
		main: () => 
			<Fragment>
				<Header />  
				<Search />
				<ProductListPage />
				<Footer /> 
			</Fragment>	
	},
	{
		path: '/product/:id',
		exact: false,
		main: ({match}) => 
			<Fragment>
				<Header />  
				<Search /> 
				<SingleProductPage match={match} />
				<Footer /> 
			</Fragment>
	},
	{
		path: '/admins/:id',
		exact: false,
		main: ({match}) => <AppAdmin match={match} />
	}

];

export default routes;