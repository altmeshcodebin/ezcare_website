import React from 'react';

// Layout

// Elements
import MainBannerSection from "../elements/main-banner";
import AboutSection from "../elements/about";
import TestimonialSection from "../elements/testimonial";
import ServicesSliderSection from "../elements/services-slider";
import LatestNewsSection from "../elements/latest-news-slider";
import ContactUs from './contact-us';

function Index(){
	
	return(
		<>
			
			<MainBannerSection />
			
			<AboutSection />
			
			<ContactUs />
			
			<ServicesSliderSection />
			
			<TestimonialSection />
			
			<LatestNewsSection />
			
		</>
		
	);
}

export default Index;