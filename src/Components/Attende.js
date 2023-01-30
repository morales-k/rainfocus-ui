import React from 'react'
import "../Styles/Attendes.scss";
import attendeIcon from "../Assets/images/personportal.svg";
import Card from './Card';
import LongCard from './LongCard';
import arrow from "../Assets/images/arrow.svg";
import addcircleoutline from "../Assets/images/addcircleoutline.svg";
import computer from "../Assets/images/computer.svg";

const Attende = () => {
  return (
    <div id="attende" className="flex-col">
        <div className="flex-row attende-icon">
            <img 
              src={attendeIcon} 
              alt="Attende Icon" />
              <h3>Attende</h3>
        </div>
        <p className="step"><span>Step 1:</span> Base settings.</p>
        <LongCard />
        <p className="step"><span>Step 2:</span> Build registration workflows.</p>
        <div className="multi-card flex-row">
          <Card
            icon={arrow}
            title="Attendee Registration"
            info="Start by creating a general registration workflow" />
          <Card
            icon={arrow}
            title="Attendee Registration"
            info="Start by creating a general registration workflow" />
          <Card
            icon={arrow}
            title="Attendee Registration"
            info="Start by creating a general registration workflow" />
        </div>
          <Card
            icon={addcircleoutline}
            title=""
            info="Add registration workflow"
            single={true} />
        <p className="step"><span>Step 3:</span> Design post-registration experiences.</p>
        <Card
          icon={computer}
          title="Attendee Portal"
          info="Manage the portal that attendees will see after they’ve register for your event." 
          single={true} />
    </div>
  )
}

export default Attende;