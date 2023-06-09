import React  from 'react'
import {Menu} from '@components/Menu'
import {AppContext}  from '../context/AppContext';
import {MyOrder} from '../containers/MyOrder'
import menu from '@icons/icon_menu.svg'
import logo from '@logos/logo_yard_sale.svg'
import shoppingCart from '@icons/icon_shopping_cart.svg'
import '@styles/Header.scss'
const Header = () => {
	const [toggle, setToggle] = React.useState(false);
	const [toggleOrders,setToggleOrders]= React.useState(false)
	const { state } = React.useContext(AppContext);

	const handleToggle = () => {
		setToggleOrders(false);
		setToggle(!toggle);
	}
	const handleToggleOrders = ()=>{
		setToggle(false);
		setToggleOrders(!toggleOrders);
	}
	return (
		<nav>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>
						platzi@example.com
					</li>
					<li className="navbar-shopping-cart" onClick={handleToggleOrders}>
						<img src={shoppingCart} alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
					</li>
				</ul>
			</div>
			{toggle && <Menu />}
			{toggleOrders && <MyOrder />}
		</nav>
	);
}

export {Header};