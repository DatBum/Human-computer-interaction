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
		main: () => <CartPage />
	},
	{
		path: '/checkout',
		exact: false,
		main: () => <CheckoutPage />
	},
	{
		path: '/login',
		exact: false,
		main: () => <LoginPage />
	},
	{
		path: '/register',
		exact: false,
		main: () => <RegisterPage />
	},
	{
		path: '/products',
		exact: false,
		main: () => <ProductPage />
	},
	{
		path: '/product-list',
		exact: false,
		main: () => <ProductListPage />
	},
	{
		path: '/product/:id',
		exact: false,
		main: ({match}) => <SingleProductPage match={match} />
	},
	{
		path: '/admins/:id',
		exact: false,
		main: ({match}) => <AppAdmin match={match} />
	}

];

export default routes;