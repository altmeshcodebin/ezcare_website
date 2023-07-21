import React, { useState} from 'react';
import Sticky from 'react-stickynode';

// Images
import logo from '../../images/logo.png';
import logoWhite from '../../images/logo-white.png';

import MenusItems from './menus';

const Header = () => {
	
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSearchFormOpen, setIsSearchBtn] = useState(false);

	
	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	const quikSearchClose = () => setIsSearchBtn(false);
	const closeMenu = () => setIsMenuOpen(false);
	
	return(
		<header className="header header-transparent rs-nav">
			<Sticky enabled={true} className="sticky-header navbar-expand-lg">
				<div className="menu-bar clearfix">
					<div className="container-fluid clearfix">
						<div className="menu-logo logo-dark">
							<a href="/"><img className='footer-logo-img' src={logo} alt=""/></a>
						</div>
						
						<button className={`navbar-toggler collapsed menuicon justify-content-end ${ isMenuOpen ? 'active' : '' }`}
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#menuDropdown"
							aria-controls="menuDropdown"
							aria-expanded="false"
							aria-label="Toggle navigation"
							onClick={toggleMenu}>
								<span></span>
								<span></span>
								<span></span>
						</button>

						<div className="secondary-menu">
							<ul>
								<li className="num-bx"><a className="text-primary" href="tel:(+01)999888777"><i className="fas fa-phone-alt"></i> (+01) 999 888 777</a></li>
								<li className="btn-area"><a href="/contact-us" className="btn btn-primary shadow">CONTACT US <i className="btn-icon-bx fas fa-chevron-right"></i></a></li>
							</ul>
						</div>
						
						<div className={`menu-links navbar-collapse collapse justify-content-end show ${isMenuOpen ? 'show' : ''}`} id="menuDropdown">
							<div className="menu-logo">
								<a href="/"><img src={logoWhite} alt=""/></a>
							</div>
							
							<MenusItems />
							
							<ul className="social-media">
								<li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/" className="btn btn-primary"><i className="fab fa-facebook-f"></i></a></li>
								<li><a target="_blank" rel="noreferrer" href="https://www.google.com/" className="btn btn-primary"><i className="fab fa-google"></i></a></li>
								<li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/" className="btn btn-primary"><i className="fab fa-linkedin-in"></i></a></li>
								<li><a target="_blank" rel="noreferrer" href="https://twitter.com/" className="btn btn-primary"><i className="fab fa-twitter"></i></a></li>
							</ul>
							
							<div className="menu-close" id="menuClose" onClick={closeMenu}>
								<i className="ti-close"></i>
							</div>
							
						</div>
					</div>
				</div>
			</Sticky>
			
			<div className={`nav-search-bar ${isSearchFormOpen ? 'show' : ''}`}>
				<form>
					<input type="text" className="form-control" placeholder="Type to search"/>
					<span><i className="ti-search"></i></span>
				</form>
				<span id="searchRemove" onClick={quikSearchClose}><i className="ti-close"></i></span>
			</div>
			
		</header>
	
	);
}

export default Header;