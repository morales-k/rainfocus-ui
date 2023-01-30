import React from 'react'
import "../Styles/Cards.scss";

const Card = (props) => {
  const { icon, title, info, single } = props;
  const centerStyle = title === "";
  const singleCard = single === true;

  return (
    <div className={singleCard ? "flex-col card no-left-m" : "flex-col card"}>
      <div className={centerStyle ? "flex-row center-style" : "flex-row"}>
          {
            icon ?
            <img 
            src={icon} 
            alt="Card icon" /> : null
          }
          <p className="title">{title}</p>
      </div>
        <p className={centerStyle ? "info center-style" : "info"}>{info}</p>
    </div>
  )
}

export default Card;