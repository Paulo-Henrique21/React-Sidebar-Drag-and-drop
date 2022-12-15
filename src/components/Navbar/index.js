import React from 'react';
import {
	FaAngleRight,
	FaAngleLeft, 
	FaChartBar, 
	FaThLarge, 
	FaShoppingCart, 
	FaCog,
	FaSignOutAlt,
	FaBars,
	FaReact
} from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import "./style.css";



function Navbar({visible, show}) {

	return (
		<>
			<div className="mobile-nav">
				<button
					className="mobile-nav-btn"
					onClick={() => show(!visible)}
				>
					<FaBars size={24}  />
				</button>
			</div>
			<nav className={!visible ? 'navbar' : ''}>
				<button
					type="button"
					className="nav-btn"
					onClick={() => show(!visible)}
				>
					{ !visible
						? <FaAngleRight size={30} /> : <FaAngleLeft size={30} />}
				</button>
				<div>
					<NavLink
						className="logo"
						to="/"
					>
							<img
								src={require("../../assets/Images/gps.png")}
								alt="logo"
							/>
					</NavLink>
					<div className="links nav-top">
						<NavLink to="/dashboard" className="nav-link">
							<FaThLarge className='icon' />
							<span>Dashboard</span>
						</NavLink>
						<NavLink to="/analytics" className="nav-link">
							<FaChartBar className='icon' />
							<span>Analytics </span>
						</NavLink>
						<NavLink to="/orders" className="nav-link">
							<FaShoppingCart className='icon' />
							<span>Orders</span> 
						</NavLink>
						<NavLink to="/test" className="nav-link">
							<FaReact className='icon' />
							<span>Test</span> 
						</NavLink>
					</div>
				</div>

				<div className="links">
					<NavLink to="/settings" className="nav-link">
						<FaCog className='icon' />
						<span>Settings</span> 
					</NavLink>
					<NavLink to="/Sign-out" className="nav-link">
						<FaSignOutAlt className='icon' />
						<span>Logout</span> 
					</NavLink>
				</div>
			</nav>
		</>
  );
}

export default Navbar;
