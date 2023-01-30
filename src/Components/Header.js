import React from 'react'
import orgLogo from "../Assets/images/org.svg";

const Header = () => {
  return (
    <div id="header" className="flex-col">
		<div className="flex-row">
			<img 
			src={orgLogo} 
			alt="Org logo" />
			<div className="flex-col org-details">
				<div className="flex-row heading-row">
					<h1>RainFocus Summit</h1>
					<button 
						className="edit-event-btn">
						Edit Event
					</button>
				</div>
				<p>December 15th</p>
				<p>Lehi, Utah</p>
			</div>
		</div>
        <div className="flex-col">
          <h2>Event setup guide</h2>
          <p>See the available list of modules below. We suggest that you start with the attendee module.</p>
        </div>
    </div>
  )
}

export default Header;