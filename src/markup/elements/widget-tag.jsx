import React, { Component } from 'react';

class widgetTag extends Component{
	render(){
		return(
			<>
				<div className="widget widget_tag_cloud">
					<h4 className="widget-title">Tags</h4>
					<div className="tagcloud"> 
						<a href="#">Improvement</a> 
						<a href="#">Health</a> 
						<a href="#">Life</a> 
						<a href="#">Covid</a> 
						<a href="#">Healthy</a> 
						<a href="#">Growth</a>
						<a href="#">Education</a> 
						<a href="#">Manage</a> 
						<a href="#">General</a>
					</div>
				</div>
				
			</>
		);
	}
}

export default widgetTag;