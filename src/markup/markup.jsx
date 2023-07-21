import React, { Component } from 'react';

// Elements
import BackToTop from './elements/back-top';
import PageScrollTop from './elements/page-scroll-top';

// Layout
import Header from "./layout/header";
import Footer from "./layout/footer";

// All Pages Router
import Index from './pages/index';

class Markup extends Component{
	render(){
		return(
			<>	
				<Header />
				<Index />
				<Footer />
				<BackToTop />
				
			</>
		);
	}
}
export default Markup;