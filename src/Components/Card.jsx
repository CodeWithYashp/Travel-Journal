import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.item.imageUrl} alt="image" className="card--img" />
      <div className="card--info">
        <div className="card--location">
          <img src="/location.png" alt="" className="location--icon" />
          <p className="location_name">{props.item.location}</p>
          <a
            href={props.item.googleMapsUrl}
            target="__blank"
            className="location_text"
          >
            View On Google Maps
          </a>
        </div>
        <h1 className="card--title">{props.item.title}</h1>
        <p className="card--dates">
          {props.item.startDate}-{props.item.endDate}
        </p>
        <p className="card--desc">{props.item.description}</p>
      </div>
    </div>
  );
}
