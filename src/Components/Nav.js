import React from 'react'
import navLogo from "../Assets/images/navlogo.svg";
import navOrg from "../Assets/images/navorg.svg";
import navUser from "../Assets/images/navuser.svg";

const Nav = () => {
  return (
    <nav id="nav" className="flex-row">
		<div className="flex-col sidebar">
			<div className="flex-col">
				<img 
					src={navLogo} 
					alt="RainFocus logo" />
				<img 
					src={navOrg} 
					alt="Organization logo" />
			</div>
			<div className="flex-col">
				<img 
					src={navUser} 
					alt="Current user image" />
			</div> 
		</div>
		<div className="flex-col nav-main">
			<h3>RainFocus Summit</h3>
			<p>Lehi, UT • December 15th</p>
			<input type="text" name="search" placeholder="Search" />
			<ul>
				<li><span className="bullet" />Guide</li>
				<li className="nav-selected">
					<span className="bullet bullet-selected" />
					Attendees
				</li>
				<li>
					<ul className="sublist">
						<li>Attendees</li>
						<li>Attendee types</li>
						<li>Packages</li>
						<li>Reg codes</li>
						<li>Discounts</li>
					</ul>
				</li>
				<li><span className="bullet" />Content</li>
				<li><span className="bullet" />Exhibitors</li>
			</ul>
		</div>
    </nav>
  )
}

export default Nav;