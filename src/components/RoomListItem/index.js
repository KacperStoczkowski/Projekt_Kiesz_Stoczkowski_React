import React from "react";

const RoomListItem = ({room: {title, price, currency, image, size}}) => {
	return (
		<div className="room-list-item">
			<h3 className="room-title">{title}</h3>
			<p className="price">Price: {price} {currency} </p>
			<img src={image} className="room-image"></img>
			<p>Room size: {size}</p>
		</div>
	);
};

export default RoomListItem;